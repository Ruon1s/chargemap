'use strict';
require('dotenv').config();
const express = require('express');
const server = express();
const db = require('./database/db');
const cors = require('cors');
const port = 3000;

db.on('connected', () => {
        server.listen(port, () => console.log(`Example app listening on port ${port}!`));
        console.log('wee');
    }
);

const stationRoute = require('./routes/authRoute');

server.use(cors());
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use('/station', stationRoute);
