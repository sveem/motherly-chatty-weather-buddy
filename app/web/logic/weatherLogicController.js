var weatherController = require('../weather/weatherController.js');
var util = require('./util.js');

module.exports = {
  getWeatherPhrases: function(req, res, next) {
    var temperature = "";
    var weatherEvent = "";
    var hourlyData = JSON.parse(req.body).data;
    var avgTemperature = 0;
    for(let i = 0; i < 24; i++) {
      avgTemperature += hourlyData[i].temperature / 24;
    }
    temperature = util.fahrenheitToString(avgTemperature);
    console.log(temperature);
    console.log(weatherEvent);
    res.end(req.body)
  }
};