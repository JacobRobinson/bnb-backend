/* eslint-disable no-console */

// properties-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'properties';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');

        table.integer('owner').notNullable();
        table.foreign('owner').references('users.id');  //add column name, reference, FK)

        table.string('name').notNullable();
        table.string('address').notNullable();    //update to multiple strings
        table.string('type').notNullable();       //restrict to vals
        table.string('image_url').notNullable();
        table.integer('capacity').notNullable();
        table.integer('beds').notNullable();
        table.float('price').notNullable();       //nightly
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
