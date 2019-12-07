exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
        user.increments();
        user.string('email').notNullable();
        user.string('password').notNullable;
    })
};

exports.down = function(knex) {
    return knew.schema.dropTableIfExists('users');
};