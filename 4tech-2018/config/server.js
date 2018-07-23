'use strict';

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');
const consign = require('consign');

//liberando acesso
const cors = require('cors');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors({origin: '*'}));

consign()
    .include('./config/firebaseConfig.js')
    .then('./app/routes')
    .into(server)

module.exports = server; 