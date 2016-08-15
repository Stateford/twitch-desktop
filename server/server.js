// server/server.js
/**
 * @description
 * server to control the API
*/
require('dotenv').load();
const express = require('express');
const app = express();


// API CALLS
/**
 * @description : handles all api calls
*/

app.get('/api/test', function(req, res) {
    res.json(JSON.stringify({ test: true }));
});

app.listen(process.env.PORT);
