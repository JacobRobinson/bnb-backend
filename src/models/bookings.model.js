/* eslint-disable no-console */

// bookings-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'bookings';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        //datafields
        table.specificType('period', 'daterange');
        table.unique('period');
        // foreign keys
        table.integer('property');
        table.foreign('property').references('property.id');
        table.integer('user');
        table.foreign('user').references('users.id');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
