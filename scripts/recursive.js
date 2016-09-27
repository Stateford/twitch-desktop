const fs = require('fs');
const path = require('path');

function checkPath(dir, callback) {
    fs.stat(dir, function(err) {
        if(err) {
            callback(false);
            return;
        } else {
            callback(true);
            return;
        }
    });
}

function recursive(dir, data, callback=null) {
    if(typeof dir !== 'string') {
        callback("INVALID_TYPE");
        return;
    } else {
        if(arguments.length < 3) {
            callback = data;
            callback(null, dir);
        } else {
            if(typeof data !== 'string') {
                callback("INVALID_TYPE");
                return;
            }
        }
    }
}
