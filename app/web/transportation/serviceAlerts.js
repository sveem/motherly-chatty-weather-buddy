var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '8da2071f9daa6e3942a7f34d1e278768', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

function mtaInfo(req, res, next) {
var subwayInfo = [];

mta.status('subway').then(function (result) {
  for(var i = 0; i< result.length; i++) {
    if(result[i].status === "DELAYS" || result[i].status === "PLANNED WORK") {
  	var lines = result[i].name;
  	var status = result[i].status;
  	var info = lines + " : " + status;
  	  subwayInfo.push(info);
   } 
  }
  req.query.subwayInfo = subwayInfo;
  next();
 });
}

module.exports.mtaInfo = mtaInfo;

/*
function getHourly (req, res, next){
 var headers = {}
 for (var key in request.headers) {
   if (request.headers.hasOwnProperty(key)) {
   headers[key] = request.get(key)
   }
 }
 
  var newurl = "https://api.forecast.io/forecast/32fb6fd1e3da63be7cd7cae8121fe98a/" 
    + req.query.latitude + "," + req.query.longitude;

  request.get({url:newurl}, function (error, response, body) {
   if(error) next(error);
   req.body = JSON.stringify(JSON.parse(body).hourly);
   next();
  })
}
*/