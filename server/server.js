// server/server.js
/**
 * @description
 * server to control the API
 * app will communicate with the API
*/
require('dotenv').load();
const express = require('express');
const app = express();
const request = require('../scripts/request');

// API CALLS
/**
 * @description : handles all api calls
*/

app.get('/api/stream/:channel', (req, res) => {
    let channel = req.params.channel;
    res.send(req.params.channel);
});

app.listen(process.env.PORT);
