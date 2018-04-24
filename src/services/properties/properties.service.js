// Initializes the `properties` service on path `/properties`
const createService = require('feathers-knex');
const createModel = require('../../models/properties.model');
const hooks = require('./properties.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'properties',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/properties', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('properties');

  service.hooks(hooks);
};
