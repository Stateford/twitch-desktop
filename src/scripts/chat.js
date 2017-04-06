// scripts/chat.js

/**
 * @description : parses the config and returns the proper information
 */

class Chat {
    /**
     * @description :
     */
     static inline(channel, callback) {

         //TODO :

     }
    /**
     * @description : returns the URL for the current channels popoutchat
     */
    static popout(channel) {
        return new Promise((resolve, reject) => {
            return resolve(`https://www.twitch.tv/${channel}/chat?popout=`);
        });
    }
    /**
     * @description : parses the config and returns the proper channel infomration
     */
    static run(channel) {
        return new Promise((resolve, reject) => {
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
        });
    }

}

Chat.run("arteezy").then(console.log);
