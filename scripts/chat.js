// scripts/chat.js

const electron = require('electron');
const shell = require('electron').shell;

class Chat {
    static popout(channel) {
        return `https://www.twitch.tv/${channel}/chat?popout=`;
    }
    static run() {
        let config = require('../data/config.json');
    }
}
