// airquality-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const airquality = new mongooseClient.Schema({
    sensor_id: { type: String, required: true, ref: 'sensor' },
    sensor_time: { type: Date, required: false },
    temperature: {type: Number, required: true},
    humidity: {type: Number, required: true},
    airquality: {type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('airquality', airquality);
};
