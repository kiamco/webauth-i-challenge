const express = require("express");
const cors = require("cors");
const UsersRoute = require('./routes/user');
const server = express();

server.use(cors());
server.use(express.json());

//insert routes
server.use('/api', UsersRoute)


module.exports = server;