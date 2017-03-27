// scripts/searchHandler.js
/**
 *  @description:
 */
function search(input, callback) {
    if(typeof input === 'string') {
        return callback(null, `https://www.twitch.tv/api/kraken/streams/${input}`);
    } else {
        return callback('INVALID_INPUT');
    }
    return;
}

module.exports = search;
