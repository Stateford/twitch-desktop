// scripts/update.js

const os = require('os');

const system = [
    'darwin', // mac
    'linux', // linux
    'win32' // windows
];

// setup to run our updater
const sys = {
    // windows
    win32: function() {
        require('./win32')();
    },
    // mac OSX
    darwin: function() {
        require('./darwin')();
    },
    // linux
    linux: function() {
        require('./linux')();
    }
};

function update() {
    let curOS = os.platform();
    for(let build of system) {
        if(curOS === build) {
            sys[curOS]();
            break;
        }
    }
    return;
}

module.exports = update;
