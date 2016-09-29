/**
 * @license twitch-desktop-app
 * (c) 2016 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description
 * launches VLC from specified stream and settings
*/
/**
 * TODO: Fix stream logic here
*/

require('dotenv').load();
const config = require('../data/config.json');
const childProcess = require('child_process');
const twitchStream = require('twitch-get-stream');

class Process {
    static startStream(stream) {
        let link = `${process.env.STREAM_API}/${stream}`;
        console.log(link);
        Request.get(link, function(err, data) {
            if(err) throw err;
            console.log(data);
        });
        /*
         * NOTE: set logic to get twitch stream url here
        */
    }
}
