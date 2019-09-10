
exports.seed = function(knex) {
  // Deletes ALL existing entries & resets primary keys
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'chris', website: 'www.chris.com' },
        { username: 'ericka' }
      ]);
    });
};
