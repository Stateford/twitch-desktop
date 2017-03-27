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
const os = require('os');

// NOTE: Point to our config here so we don't have to set it in every line
const configPath = `${process.cwd()}/data/config.json`;

/*
// check current OS for save location
function saveLoc(callback) {
    let curOS = os.platform();
    let sys = {
        win32: `${os.homedir()}\\appdata\\local\\twitch\\config.json`,
        linux: `${os.homedir()}\\.local\\twitch\\config.json`
    };
    switch(curOS) {
        case "win32":
            callback(null, sys.win32);
            break;
        case "linux":
            callback(null, sys.linux);
            break;
        default:
            callback(`${curOS} is not a currently supported OS`);
            break;
    }
}
*/
// NOTE: CREATE READ / WRITE STREAM
class Config {
    constructor() {
        this.config = configPath;
    }

    // set VLC options
    static setPlayer(options, callback)  {
        // NOTE: check foo.js to check for testing purposes
        // check type
         if(typeof options === "object") {
             // pull in our config
             let config = require(configPath);
             for(let i in options) {
                 switch(i) {
                    case "vlc":
                        console.log(`${i} : ${options[i]}`);
                        break;
                    case "html5":
                        console.log(`${i} : ${options[i]}`);
                        break;
                    case "twitchPlayer":
                        console.log(`${i} : ${options[i]}`);
                        break;
                    default:
                        console.log('something went wrong');
                        break;
                 }
             }
         } else {
             return callback('INVALID_TYPE');
         }
    }
    /**
     * @description :
     * allows user to set local path for VLC player so stream can be launched
     * directly to VLC player
     * @param {string} path link to users local path
     * @param {function} callback callback to check for error or success
     * @returns {function(err, success)};
    */
    static vlcPath(path, callback) {
        // check if argument is a string
        if(typeof path === 'string') {
            // check if path exists
            fs.stat(path, err => {
                if(err) {
                    return callback("INVALID_PATH" + err, null);
                }
                try {
                    // import our config
                    let config = require(configPath);
                    // update our config
                    config.vlcPath = path;
                    // write to config
                    fs.writeFile(configPath, JSON.stringify(config, null, 4), function(err) {
                        if(err) throw err;
                    });
                    return;
                } catch(e) {
                    // reset our config to defaults
                    this.default();
                    return callback(e, null);
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
            let config = require(configPath);
            /*
             * NOTE:  add logic to ensure correct quality input
            */
            // update our config
            config.options.quality = quality;
            // write to config
            fs.writeFile(configPath, JSON.stringify(config, null, 4), err => {
                if(err) throw err;
            });
        } catch(e) {
            console.log('error', e);
            // reset config to defaults
            this.default();
        }
    }
    /**
     * @description : sets the user defined default window
     * @param {String} str:
     * @returns
    */
    static setDefaultWindow(str, callback) {
        // pull in our config
        let config = require(configPath);
        // set our valid settings
        let settings = ['featured', 'channels', 'games', 'following'];
        // check type
        if(typeof str === 'string') {
            for(let i of settings) {
                if(str === i) {
                    config.options.defaultWindow = str;
                    fs.writeFile(configPath, JSON.stringify(config, null, 4), err => {
                        if (err) throw err;
                    });
                }
            }
        } else {
            return callback('INVLAD_TYPE');
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

    /**
     * NOTE: USE AN OBJECT AND TYPE CHECK FOR BOOLEANS INSTEAD OF HAVING MULTIPLE ARGS
     */

    static setChat(options, callback) {
        // check for optional inputs
        // NOTE: this may be unneeded
        // check if argument is a boolean
        let boolCheck = true;
        // check type on our settings
        for(let i of options) {
            if(typeof options[i] !== 'boolean' && typeof options !== 'object') {
                boolCheck = false;
            }
        }
        if(boolCheck) {
            try {
                // import our config
                let config = require(configPath);
                // update our config
                config.options.chat.enabled = options.chat.enabled;
                config.options.chat.popoutChat = options.chat.popoutChat;
                // write to config
                fs.writeFile(configPath, JSON.stringify(config, null, 4), err => {
                    if(err) throw err;
                });
            } catch(e) {
                console.log('error', e);
                // reset our config to defaults
                this.default();
            }
        } else if(!boolCheck) {
            return callback(`INVALID_TYPE`);
        }
    }
    /**
     * @description: blanket function for writing to config
     * @param {Object} options : the full config with added changes to be written
     * @param {Function} callback: takes the argument (err).
     */
    static writeConfig(options, callback) {
        fs.writeFile(configPath, options, err => {
            if(err) return callback(err);
        });
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
                "chat" : {
                    "enabled": true,
                    "popoutChat": false
                },
                "player" : {
                    "vlc": false,
                    "html5": false,
                    "twitchPlayer": true
                },
                "quality": "source",
                "notifications": false,
                "defaultWindow": "following"
            },
            "vlcPath": "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe"
        };

        // write to config
        // NOTE: config is written to the users home directory. EX: c:\users\<username>\appdata\local\twitch\config.json
        // TODO: set correct directory for writing files after test is done
        // NOTE: use createPath.js to handle this logic
        fs.stat(`${process.cwd()}/data/`, err => {
            if(err) {
                fs.mkdir(`${process.cwd()}/data/`, err => {
                    if(err) console.error(err);
                });
            } else {
                fs.writeFile(configPath, JSON.stringify(defaults, null, 4), err => {
                    if(err) console.error(err);
                });
            }
        });

        fs.writeFile(configPath, JSON.stringify(defaults, null, 4), err => {
            if(err) console.error(err);
        });
    }
}

module.exports = Config;
