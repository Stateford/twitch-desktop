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

class Process {
    static startStream(stream) {
        let link = `${process.env.STREAM_API}/${stream}`;
        Request.get(link)
            .then(console.log)
            .catch(console.error);
        /*
         * NOTE: set logic to get twitch stream url here
        */
    }
}
