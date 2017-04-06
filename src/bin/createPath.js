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
    constructor(dir) {
        if(typeof dir === 'string') {
            this.path = dir;
        }
    }
    chkpath(callback) {
        if(path.isAbsolute(this.path)) {
            let bar = this.path.split(path.sep); // @ NOTE: returns [ 'D:', 'github', 'twitch-desktop-vlc', 'test', 'test', 'test.js' ]
            let tempPath = '';
            for(let i of bar) {
                if(i.charAt(i.lenth - 1) === ':') {
                    test = path.join(tempPath, `${i}/`);
                } else if(path.extname(i) !== '') {
                    // TODO: fix this logic
                    fs.writeFile(tempPath, data, err => {
                        if(err) callback(err);
                    });
                } else {
                    tempPath = path.join(tempPath, i);
                }
                fs.stat(tempPath, err => {
                    if(err) {
                        fs.mkdir(tempPath, err => {
                            if(err) callback(err);
                        });
                    }
                });
            }
            callback(null, bar);
        } else {
            path.normalize(this.path);
        }
    }
}

let foo = new CreatePath(`${__dirname}\\test\\test.js`);

foo.chkpath((err, data) => {
    if(err) throw err;
    console.log(data);
});
