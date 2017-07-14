// Initializes the `airquality` service on path `/airquality`
const createService = require('feathers-mongoose');
const createModel = require('../../models/airquality.model');
const hooks = require('./airquality.hooks');
const filters = require('./airquality.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'airquality',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/airquality', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('airquality');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
