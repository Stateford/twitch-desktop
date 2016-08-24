/**
 * @license twitch-desktop-app
 * (c) 2016 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description
 * controls all actions involved in updating the config
*/

/*
 * TODO : MUST SET ERROR CHECKS ON TYPEOF
*/

// scripts/configController.js
require('../app/error');
const fs = require('fs');

class Config {
    /**
     * @description :
     * allows user to set local path for VLC player so stream can be launched
     * directly to VLC player
     * @param {string} path link to users local path
     * @param {function} callback callback to check for error or success
     * @returns {function(err, success)};
 }
    */
    static vlcPath(path, callback) {
        // check if argument is a string
        if(typeof(path) === 'string') {
            // check if path exists
            fs.stat(path, function(err) {
                if(err) {
                    callback(INVALID_PATH, null);
                    return;
                }
                try {
                    // import our config
                    let config = require(`${process.cwd()}/data/config.json`);
                    // update our config
                    config.vlcPath = path;
                    // write to config
                    fs.writeFile(`${process.cwd()}/data/config.json`, JSON.stringify(config, null, 4), function(err) {
                        if(err) throw err;
                    });
                    return;
                } catch(e) {
                    callback(e, null);
                    // reset our config to defaults
                    this.default();
                    return;
                }
            });
        }
    }
    // set the quality
    /**
     * @description
     * allows the user to choose a preferred quality and save it to config.json
     * @param {string} quality : user input for preferred quality
     * @param {function} callback : checks for success or error
     * @returns
    */
    static setQuality(quality, callback) {
        try {
            // import our config
            let config = require(`${process.cwd()}/data/config.json`);
            /*
             * NOTE:  add logic to ensure correct quality input
            */
            // update our config
            config.options.quality = quality;
            // write to config
            fs.writeFile(`${process.cwd()}/data/config.json`, JSON.stringify(config, null, 4), function(err) {
                if(err) throw err;
            });
        } catch(e) {
            console.log('error', e);
            // reset config to defaults
            this.default();
        }
    }
    // set chat option
    /**
     * @description
     * allows a user to save chat prefrences to config.json
     * @param {boolean} bool : user input for chat prefrences
     * @param {function} callback : checks for success / error
     * @returns
    */
    static setChat(bool, callback) {
        // check if argument is a boolean
        if(typeof(bool) === boolean) {
            try {
                // import our config
                let config = require(`${process.cwd()}/data/config.json`);
                // update our config
                config.options.chat = bool;
                // write to config
                fs.writeFile(`${process.cwd()}/data/config.json`, JSON.stringify(config, null, 4), function(err) {
                    if(err) throw err;
                });
            } catch(e) {
                console.log('error', e);
                // reset our config to defaults
                this.default();
            }
        } else {
            callback(`${bool} is not a boolean`);
        }
    }
    // sets config to default
    /**
     * @description
     * resets config.json to default values
    */
    static default() {
        // set our defaults
        let defaults = {
            "options": {
                "quality": "source",
                "chat": false,
                "popoutChat": false,
                "vlc": false,
                "html5": false,
                "twitchPlayer" : true
            },
            "vlcPath": "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe",
        };
        // write to config
        fs.stat(`${process.cwd()}/data/`, function(err) {
            if(err) {
                fs.mkdir(`${process.cwd()}/data/`, function(err) {
                    if(err) console.error(err);
                });
            } else {
                fs.writeFile(`${process.cwd()}/data/config.json`, JSON.stringify(defaults, null, 4), function(err) {
                    if(err) console.error(err);
                });
            }
        });

        fs.writeFile(`${process.cwd()}/data/config.json`, JSON.stringify(defaults, null, 4), function(err) {
            if(err) console.error(err);
        });
    }
}

module.exports = Config;
