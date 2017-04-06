// electronApp.js

const remote = require('electron').remote;
const ipc = electron.ipcRenderer;
const shell = require('electron').shell;

// load jquery into electron
window.$ = window.jQuery = require('../../lib/jquery/dist/jquery.min');

$(document).ready(function() {

});
