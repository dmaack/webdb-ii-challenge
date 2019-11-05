
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '4d5e6f', make: 'Toyota', model: 'land rover', mileage: '250000'},
        {VIN: '1a2b3c', make: 'Toyota', model: 'land cruiser', mileage: '256789'},
        {VIN: '123abc', make: 'Tesla', model: 'Model 3', mileage: '123456'}
      ]);
    });
};
