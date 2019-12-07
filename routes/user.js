const express = require("express");
const Users = require("../data/models/userModel");

const Router = express.Router();


router.get('/users', (req, res) => {
    Users.getTasks()
        .then(users => {
            console.log(users);
            res.status(200).json(booleanParser(users));
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get users'
            });
        });
});