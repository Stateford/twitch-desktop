// menu.js
window.$ = window.jQuery = require('./lib/jquery/dist/jquery.min.js');
$(document).ready(function() {
    // TILE
    $('.tile').on('click', function() {
        if($('.default').hasClass("hidden")) {
            $('.default').removeClass("hidden");
        } else {
            $('.default').addClass('hidden');
        }
    });

    // MENU ACTIVE
    let menuButtons = [
        'featured',
        'channels',
        'games',
        'following',
        'dashboard',
        'options'
    ];
    // MENU FEATURED
    $('#menu-featured').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $(this).addClass('menu-active');
    });
    // MENU CHANNELS
    $('#menu-channels').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $(this).addClass('menu-active');
    });
    // MENU GAMES
    $('#menu-games').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $(this).addClass('menu-active');
    });
    // MENU DASHBOARD
    $('#menu-dashboard').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $(this).addClass('menu-active');
    });
    // OPTIONS
    $('#menu-options').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $(this).addClass('menu-active');
    });


    // TILES
        // FEATURED
    $('#tile-featured').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $("#menu-featured").addClass('menu-active');
    });
    // CHANNELS
    $('#tile-channels').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $("#menu-channels").addClass('menu-active');
    });
    //GAMES
    $('#tile-games').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $("#menu-games").addClass('menu-active');
    });
    // DASHBOARD
    $('#tile-dashboard').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $("#menu-dashboard").addClass('menu-active');
    });
    // OPTIONS
    $('#tile-options').on('click', function() {
        for(let button of menuButtons) {
            $(`#menu-${button}`).removeClass('menu-active');
        }
        $("#menu-options").addClass('menu-active');
    });


});
