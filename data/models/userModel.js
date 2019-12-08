const knex = require("knex");
const config = require("../../knexfile");
const db = knex(config.development);

const find = () => {
    return db('users').select('*');
}

const findUser = (email) => {
    return db('users')
        .select('*')
        .where('email', `${email}`);
}

const addUser = (user) => {
    return db('users').insert(user);
}



module.exports = { find, findUser, addUser }