exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { users: 'admin' },
                { password: 'password' }
            ]);
        });
};