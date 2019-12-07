const knew = require("knex");
const config = require("../../knexfile");
const db = knex(config.development);

const find = () => {
    return db('users').select('*');
}

const findByEmail = (email) => {
    return db('users')
        .select('*')
        .where('email', `${email}`);
}