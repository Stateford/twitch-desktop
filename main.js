// main.js
/**
 * @license twitch-desktop-app
 * (c) 2016 idietmoran <idietmoran@gmail.com>
 * License: MIT
 */
/**
 * @description : main file for the app
*/
const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;   // module to control the application life
const BrowserWindow = electron.BrowserWindow;   // Module to create native browser

// keep a global refrence of the window object, if you don't the window will
// be closed automatically when the JavaScript object is garbage collected

let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // on OSX it is common for applications and their menu bar
    // to stay active until the user quits explicity with Cmd+Q
    if(process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser windows

    mainWindow = new BrowserWindow({width: 825, height: 558, minWidth: 825, minHeight: 558, frame: true, resizeable: true});

    mainWindow.loadURL(`file://${__dirname}/client/index.html`);

    /**
     * TODO: add ipc listeners to work with frontend
    */


    // NOTE: Open the DevTools
    // NOTE: for development
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element
        mainWindow = null;
    });
});
// require('./app/electron/tray');
