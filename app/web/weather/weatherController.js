// api call by zipcode

var router = require("express").Router();
    Q       = require('q');
    var mongoose = require('mongoose');

var unirest = require('unirest');

// var xhr = new XMLHttpRequest();
// var getLocation = xhr.navigator.geolocation.getCurrentPosition(function(position) {
//  return(position.coords.latitude, position.coords.longitude);
// })


console.log("hereeee")
// getLocation = longitude and lat from client
// var Weather = require('../models/chatty');
var endPoints ="http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=bff0f682235785a793d3f9aade60fc80"

// module.exports = {

// create : function (req, res) {
//   var weatherStatus = new WeatherStatus(req.body);
//   weatherStatus.save(function (err, result) {
//     res.json(result);
//   });
// },

// getDisplay: function (req, res) {
//   WeatherStatus.find({}, function (err, results) {
//     res.json(results);
//   });
// }

unirest.get(endPoints)
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.body)
  // res.send(result)
});
// }
// module.exports = router;
