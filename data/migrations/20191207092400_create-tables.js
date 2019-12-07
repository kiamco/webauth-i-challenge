exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
        user.increments('id').primary();
        user.string('email').unique();
        user.string('password');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};