var weatherController = require('../weather/linkController.js');

module.exports = function (app, express) {

  app.get('/api/weather/', weatherController.displayStatus);
  app.post('/api/weather/', weatherController.createStatus);

};

