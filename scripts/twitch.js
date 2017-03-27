// scripts/twitch.js
/**
 * @license twitch-desktop-app
 * (c) 2016 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description: checks if twitch stream is live and returns the m3u8 stream link
*/

require('dotenv').load();
const request = require('../bin/request');



class Twitch {
    /**
     * @description : checks if the stream is live
     * @param {string} channel : appends channel to api url for request
     * @param {function} callback : takes paramers err, res to return if stream is live
    */
    static isLive(channel, callback) {
        request.get(`${process.env.STREAM_API}\\${channel}`, (err, res) => {
            if(err) return callback(err);
            else return callback(null, res);
        });
    }
}

module.exports = Twitch;
