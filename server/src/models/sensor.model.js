// sensor-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const sensor = new mongooseClient.Schema({
    _id: { type: String, required: true, unique: true},
    label: { type: String, required: true },
    gps: { 
      lng: {type: Number, required: true },
      lat: {type: Number, required: true }
    },      
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('sensor', sensor);
};
