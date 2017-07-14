// Initializes the `sensor` service on path `/sensor`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sensor.model');
const hooks = require('./sensor.hooks');
const filters = require('./sensor.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'sensor',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sensor', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sensor');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
