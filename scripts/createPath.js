// createPath.js

/**
 * @description : checks if full path exists. If it doesn't, it will be created.
*/

/**
 * @NOTE: still WIP
*/

const fs = require('fs');
const path = require('path');

class CreatePath {
    constructor(path) {
        this.path = path;
    }
    chkpath(callback) {
        if(path.isAbsolute(this.path)) {
            let bar = this.path.split(path.sep); // @ NOTE: returns [ 'D:', 'github', 'twitch-desktop-vlc', 'test', 'test', 'test.js' ]
            let tempPath = '';
            for(let i of bar) {
                if(i.charAt(i.lenth - 1) === ':') {
                    test = path.join(tempPath, `${i}/`);
                } else {
                    tempPath = path.join(tempPath, i);
                }
            }
            callback(null, bar);
        }
    }
}

let foo = new CreatePath(`${__dirname}\\test\\test.js`);

foo.chkpath(function(err, data) {
    if(err) throw err;
    console.log(data);
});
