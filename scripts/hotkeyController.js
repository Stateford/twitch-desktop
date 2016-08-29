// scripts/hotkeyController.js

/**
 * @description : controls all changes to hotkeys
 */

const fs = require('fs');

class Hotkey {
    static default() {
        let defaults = {
            'alt-left' : 'exit'
        };
        try {
            fs.stat(`${process.cwd()}/data`, function(err) {
                if(err) {
                    fs.mkdir(`${process.cwd()}/data`, function(err) {
                        if(err) throw err;
                    });
                }
            });
        } catch(e) {
            console.log(e);
        } finally {
            fs.writeFile(`${process.cwd()}/data/hotkeys.json`, JSON.stringify(defaults, null, 4), function(err) {
                if(err) throw err;
            });
        }
    }
}
