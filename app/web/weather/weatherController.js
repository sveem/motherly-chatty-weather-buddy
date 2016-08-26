var router = require("express").Router();
    Q       = require('q');
var mongoose = require('mongoose');
var unirest = require('unirest');
var cors = require("cors");


// var endPoints ="http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=bff0f682235785a793d3f9aade60fc80"

console.log("hereeee")





function getEndPoint(latNum, lonNum){
var endPoint = "http://api.openweathermap.org/data/2.5/weather?lat=" + latNum + "&lon=" + lonNum + "&APPID=bff0f682235785a793d3f9aade60fc80"
return endPoint;
}



// module.exports = {



  console.log("ding ding ding")
unirest.get("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=bff0f682235785a793d3f9aade60fc80")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.body)
  // res.send(result.body)
})





// createStatus : function (req, res) {

//     // var weatherStatus = new WeatherStatus(req.body);
//   // weatherStatus.save(function (err, result) {
//   //   res.json(result);
//   // });
// }

// displayStatus: function (req, res) {
//   WeatherStatus.find({}, function (err, results) {
//     res.json(results);
//   });
// }


// }



module.exports = router;
