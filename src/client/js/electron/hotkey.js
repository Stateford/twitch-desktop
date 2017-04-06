// client/js/electron/hotkey.js

document.addEventListener('keydown', function(e) {
    // enterkey
    switch(e.which) {
        case(13) :
            console.log('keydown');
            break;
        default:
            break;
    }
});
