/**
 * @license twitch-desktop-app
 * (c) 2016 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description
 * Script to make requests to a server
*/
/**
 * NOTE: This file is current broken, not producing full request
*/

// Modules
const http = require('http');
const https = require('https');
const url = require('url');

class Request {
    /**
     * @description : makes a request to protocol http
     * @param {object} options : passes an object to http.request
     * @param {function} callback  : passes err or  data to callback
     * @returns {function(err, data)};
    */
    static http(options, callback) {
        let req = http.request(options, function(res) {
            res.setEncoding('utf8');

            res.on('data', function(data) {
                callback(null, data);
            });
        });
        req.on('error', function(err) {
            callback(err.message, null);
        });
        req.end();
        return;
    }
    /**
     * @description : makes a request to protocol https
     * @param {object} options : passes an object to https.request
     * @param {function} callback  : passes err or  data to callback
     * @returns {function(err, data)};
    */
    static https(options, callback) {
        let req = https.request(options, function(res) {
            res.setEncoding('utf8');

            res.on('data', function(data) {
                callback(null, data);
            });
        });
        req.on('error', function(err) {
            callback(err.message, null);
        });

        req.end();
    }
    /**
     * @description : gets a url as an argument and returns correct data
     * @param {String} link : enter an URL
     * @param {function} callback: returns either an error or data
     * @return : {function(err, data)}
    */
    static get(link, callback) {
        // parse the link into a readable format for our other functions
        let options = url.parse(link);
        // check for our protocol
        switch(options.protocol) {
            case 'http:':
                this.http(options, function(err, data) {
                    if(err) callback(err, null);
                    callback(null, data);
                });
                break;
            case 'https:':
                this.https(options, function(err, data) {
                    if(err) callback(err, null);
                    callback(null, data);
                });
                break;
            default:
                /**
                 * TODO: set up a try/catch to request information without a protocol
                */
                try {
                    this.http(options, function(err, data) {
                        if(err) throw err;
                        callback(null, data);
                    });
                    break;
                }
                catch(e) {
                    callback(e, null);
                    break;
                }
        }
    }
}

module.exports = Request;
