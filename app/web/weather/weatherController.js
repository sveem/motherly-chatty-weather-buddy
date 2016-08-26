var router = require("express").Router();
    Q       = require('q');
var mongoose = require('mongoose');
var unirest = require('unirest');
var cors = require("cors");


// var endPoints ="http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=bff0f682235785a793d3f9aade60fc80"




function getEndPoint(latNum, lonNum){
var endPoint = "http://api.openweathermap.org/data/2.5/weather?lat=" + latNum + "&lon=" + lonNum + "&APPID=bff0f682235785a793d3f9aade60fc80"
return endPoint;
}

unirest.get(getEndPoint(35,139))
.headers("Accept", "application/json")
.end(function (response) {
console.log(response.body)
})

module.exports = {


createStatus : function (req, res) {
  console.log(data)
  //   var weatherStatus = new WeatherStatus(req.body);
  // weatherStatus.save(function (err, result) {
  //   res.json(result);
  // });
}

}

// displayStatus: function (req, res) {
//   WeatherStatus.find({}, function (err, results) {
//     res.json(results);
//   });
// }


// }



// module.exports = router;
