var Mta = require('mta-gtfs');
var mta = new Mta({
  key: '8da2071f9daa6e3942a7f34d1e278768', // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});


mta.status().then(function (result) {
  console.log("++++++++++++++++++===========")
  //only subway; have to add buses too.
  for(var i = 0; i< result.subway.length; i++){
  	// if(result.subway[i].status === "DELAYS") {
  	  var names = result.subway[i].name;
  	  var status = result.subway[i].status;
  	  var test = "{" + names + ":" + status + "}";
  	  console.log(test);
  	// }
  } 
});

//This logic has to be improved tomorrow!