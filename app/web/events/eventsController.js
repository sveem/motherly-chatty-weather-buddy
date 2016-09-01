var router = require("express").Router();
var cors = require("cors");
var request = require("request");
var express = require('express')
var app = express();

var Yelp = require('yelp');
 
var yelp = new Yelp({
  consumer_key: "jyK0pX1w36_zOyRDBCQGPA",
  consumer_secret: "fldLTHhsFY4tr_rl8wDwcF_LGaU",
  token: "6TzUIWo9jSnFavceu5JgJKhp1HnnOx89",
  token_secret: "bAvERieQodYWGQk3aoWC8fT3lJ0",
});
 



function getEvents (req,res){

// router.post("eventsApi", function(req, res)

// 	)
console.log('here')
yelp.search({
	category: "icecream, All", category: "yelpevents, All", location: 'Manhattan' })
.then(function (data) {
  console.log(data);
  res.send(data)
})
.catch(function (err) {
  console.error(err);
});
 	
}


module.exports = {
getEvents: getEvents
}