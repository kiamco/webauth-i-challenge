const express = require("express");
const cors = require("cors");
const UsersRoute = require('./routes/user');
const helmet = require('helmet');
const session = require('express-session');
const server = express();

const sessionConfig = {
    name: 'mycookie',
    secret: 'cookiesareyumyummewantcookies',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true,
}
server.use(session(sessionConfig));

server.use(cors());
server.use(express.json());



//insert routes
server.use('/api', UsersRoute)




module.exports = server;