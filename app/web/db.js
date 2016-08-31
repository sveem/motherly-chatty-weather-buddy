var dbURI = require('./config/config.js');
var mongoose = require("mongoose");

var dbURL = process.env.MLAB_URI || dbURI;

module.exports = mongoose.connect(dbURL, function(err) {
  if (err) console.error(err);
  else console.log("Successfully connected to database");
});
