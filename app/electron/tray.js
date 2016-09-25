// app/slectron/tray.js

/**
 * @description
 * creates a tray object
 */
exports.done = false;
const {app, Menu, Tray} = require('electron');

let tray = null;

app.on('ready', function() {
    tray = new Tray ('/path/to/my/icon');
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Featured', type: 'normal'},
        {label: 'Channels', type: 'normal'},
        {label: 'Following', type: 'normal'},
        {label: 'foo2', type: 'separator'},
        {label: 'foo3', type: 'radio', checked: true},
        {label: 'foo4', type: 'submenu'}
    ]);
    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);
});

exports.done = true;
