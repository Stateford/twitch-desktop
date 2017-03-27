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
    static popout(channel, callback) {
        return callback(`https://www.twitch.tv/${channel}/chat?popout=`);
    }
    /**
     * @description : parses the config and returns the proper channel infomration
     */
    static run(channel, callback) {
        let config = require('../data/config.json');

        if(config.options.chat.enabled && config.options.chat.popoutChat) {
            this.popout(channel, chatUrl => {
                return callback(chatUrl);
            });
        } else if(config.options.chat.enabled && !config.options.chat.popoutChat) {

        }
    }
}
