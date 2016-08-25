// menu.js
window.$ = window.jQuery = require('./lib/jquery/dist/jquery.min.js');
$(document).ready(function() {
    // tiles
    $('.tile').on('click', function() {
        if($('.default').hasClass("hidden")) {
            $('.default').removeClass("hidden");
        } else {
            $('.default').addClass('hidden');
        }
    });

});
