/**
 * @license twitch-desktop-app
 * (c) 2017 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description
 * controls all actions involved in accessing the API
*/

const request = require('../../bin/request');

class apiController {
    constructor(options) {
        this.SECRET = options.SECRET;
        this.TOKEN = options.TOKEN;
    }
    // get channel
    getChannel(channel) {
        let link = `https://twitch.tv/api/${channel}`;
        request.get(link, (err, data) => {
            // for testing purposing
            if(err) throw err;

            if(data === null) {
                return "offline";
            }
        });
    }

}
