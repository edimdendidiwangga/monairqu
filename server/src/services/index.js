const airquality = require('./airquality/airquality.service.js');
const sensor = require('./sensor/sensor.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(airquality);
  app.configure(sensor);
};
