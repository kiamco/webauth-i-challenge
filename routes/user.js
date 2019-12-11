const express = require("express");
const Users = require("../data/models/userModel.js");
const bcrypt = require("bcryptjs");
const Router = express.Router();



Router.get('/users', (req, res) => {
    console.log(req.session, req.session.username)
    if (req.session && req.session.username) {
        Users.find()
            .then(users => {
                res.status(200).json(users);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to get users'
                });
            });
    } else {
        res.status(401).json({ message: "please login" })
    }

});

Router.post('/users', (req, res) => {
    const credentials = req.body;
    const hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hash
    Users.addUser(credentials)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => console.error(err));
})


Router.post('/login', (req, res) => {
    const { email, password } = req.body;

    Users.findUser(email)
        .then(user => {
            if (user && bcrypt.compareSync(password, user[0].password)) {
                res.status(200).json({ message: `Welcome ${user[0].email}!` });
                req.session.username = user[0].email
                console.log(req.session);
                req.session.save()
            } else {
                // we will return 401 if the password or username are invalid
                // we don't want to let attackers know when they have a good username
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(err => console.error(err));
})


Router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            console.log(err);
            if (err) {
                res.send('error logging out');
            } else {
                res.send('good bye');
            }
        });
    }
})
module.exports = Router;