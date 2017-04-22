// scripts/chat.js

/**
 * @description : parses the config and returns the proper information
 */

const Promise = require("bluebird");

 function Chat() {};

 // Chat.inline = function(channel) {
 //
 // }

 /**
  * @description : returns the URL for the current channels popoutchat
  */
Chat.popout = function(channel) {
    return new Promise((resolve, reject) => {
        return resolve(`https://www.twitch.tv/${channel}/chat?popout=`);
    });
}

Chat.run = function(channel) {
    // get our connfig
    let config = require('../data/config.json');

    // check if popout chat is enabled
    if(config.options.chat.enabled && config.options.chat.popoutChat) {
        // retrieve url
        this.popout(channel)
            .then(chatUrl => resolve(chatUrl))
            .catch(console.error);
    } else if(config.options.chat.enabled && !config.options.chat.popoutChat) {
        this.popout(channel)
            .then(chatUrl => resolve(chatUrl))
            .catch(console.error);
    }
}

module.exports = Chat;
