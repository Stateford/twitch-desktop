// install.js
/**
 * @description
 * installs all private server side files
*/
const fs = require('fs');


// .env file

fs.stat(`${__dirname}/.env`, function(err) {
    if(err){
        fs.writeFile(`${__dirname}/.env`, function(err) {
            if(err) throw err;
            else console.log('file written successfully');
        });
    }
});
