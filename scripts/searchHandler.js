// scripts/searchHandler.js
/**
 *  @description:
 */
function search(input, callback) {
    if(typeof input === 'string') {
        callback(null, `https://www.twitch.tv/api/kraken/streams/${input}`);
    } else {
        callback('INVALID_INPUT');
    }
    return;
}

module.exports = search;
