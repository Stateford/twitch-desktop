/**
 * @license twitch-desktop-app
 * (c) 2016 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description : Script to make requests to a server
*/
// Modules
// =======
const http = require('http');
const https = require('https');
const url = require('url');


// TODO: add input for headers

class Request {
    /**
     * @description : makes a request to protocol http
     * @param {Object} options : passes an object to http.request
     * @param {Function} callback  : passes err or  data to callback
     * @returns {Function(err, data)};
    */
    // TODO: add a way to include POST data;
    static http(options, callback) {
        let data = "";
        let req = http.request(options, res => {
            res.setEncoding('utf8');

            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                callback(null, data);
            });
        });
        req.on('error', err => {
            callback(err.message, null);
        });
        req.end();
    }
    /**
     * @description : makes a request to protocol https
     * @param {object} options : passes an object to https.request
     * @param {function} callback  : passes err or  data to callback
     * @returns {function(err, data)};
    */
    // TODO : add a way to take POST params
    static https(options, callback) {
        let data = "";
        let req = https.request(options, res => {
            res.setEncoding('utf8');

            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                callback(null, data);
            });
        });
        req.on('error', err => {
            callback(err.message, null);
        });

        req.end();
    }
    /**
     * @description : gets a url as an argument and makes a POST request
     * @param {String} link : enter an URL
     * @param {Object} params: post request
     * @param {function} callback: returns either an error or data
     * @return : {function(err, data)}
    */
    static post(link, params, callback) {
        if(arguments.length < 3 && typeof callback === undefined) {
            callback = params;
        }
        let options = url.parse(link);
        options.method = "POST";

        switch(options.protocol) {
            case 'http:':
                this.http(options, (err, data) => {
                    if(err) callback(err);
                    callback(null, data);
                });
                break;
            case 'https:':
                this.https(options, (err, data) => {
                    if(err) callback(err);
                    callback(null, data);
                });
                break;
            default:
                callback(`${options.protocol} is not a valid protocol`);
                break;
        }
    }

    /**
     * @description : gets a url as an argument and returns a GET request
     * @param {String} link : enter an URL
     * @param {function} callback: returns either an error or data
     * @return : {function(err, data)}
    */
    static get(link, headers, callback) {
        if(arguments.length < 3 && typeof callback === undefined) {
            callback = headers;
        }
        // parse the link into a readable format for our other functions
        let options = url.parse(link);
        // check for our protocol
        switch(options.protocol) {
            case 'http:':
                this.http(options, (err, data) => {
                    if(err) callback(err, null);
                    return callback(null, data);
                });
                break;
            case 'https:':
                this.https(options, (err, data) => {
                    if(err) callback(err, null);
                    return callback(null, data);
                });
                break;
            default:
                /**
                 * TODO: set up a try/catch to request information without a protocol
                */
                try {
                    this.http(options, (err, data) => {
                        if(err) throw err;
                        return callback(null, data);
                    });
                    break;
                }
                catch(e) {
                    return callback(e, null);
                }
        }
    }
}

module.exports = Request;
