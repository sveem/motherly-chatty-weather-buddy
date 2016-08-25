// api call by zipcode
var endPoints: http://api.openweathermap.org/data/2.5/forecast/city?zip=10014,us&APPID=bff0f682235785a793d3f9aade60fc80

var router = require("express").Router();
    Q       = require('q'),



var unirest = require('unirest')




var Meetup = require('../models/meetup');

module.exports.create = function (req, res) {
  var meetup = new Meetup(req.body);
  meetup.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Meetup.find({}, function (err, results) {
    res.json(results);
  });

unirest.get(retrieveData(input))
.header("Accept", "application/json")
.end(function (result) {
  // console.log(result.body.hits);
  res.send(result.body.hits)
});

   
  };



module.exports = router;
