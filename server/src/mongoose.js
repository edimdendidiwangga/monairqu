const mongoose = require('mongoose')

module.exports = function () {  
  const app = this;
  const config = app.get('mongodb');
  mongoose.Promise = global.Promise;
  const promise = mongoose.connect(config);

  app.set('mongooseClient', promise);
};
