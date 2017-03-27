const Config = require('../../scripts/configController');
const fs = require('fs');

// TODO: set current config options to display

// displays current config settings to page
function dispCurrent() {

}
// on load display current
Window.onLoad(() => {
    dispCurrent();
});

$('#options-submit').on('click', () => {
    // Read config
    let config = require('../../data/config.json');

    // Get our input values
    let defaultPage = $('#options-page').value();
    let player = $('#options-player').value();
    let vlcPath = $('#options-vlc-path').value();
    let chat = $('#options-chat').value();
    let quality = $('#quality').value();
});


// Cancel all current options
$('#options-cancel').on('click', () => {
    dispCurrent();
});

$('#options-default').on('click', () => {
    //TODO: add alert window to confirm resetting to defaul
    Config.default();
});
