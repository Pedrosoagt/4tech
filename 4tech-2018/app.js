'use strict';

const app = require('./config/server.js');
const port = 8080;
const express = require('express');

app.use('/vjobs', express.static(__dirname + '/app/static'));

app.get('/', async (req, res) => {
    return res.redirect('http://localhost:3000/vjobs');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})