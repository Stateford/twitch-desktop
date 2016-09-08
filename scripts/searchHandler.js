// scripts/searchHandler.js
/**
 *  @description:
 */
function search(input, callback) {
    if(typeof input === 'string') {
        callback(null, `https://www.twitch.tv/api/kraken/streams/${input}`);
    } else {
        callback('input was not a string');
    }
    return;
}

module.exports = search;
