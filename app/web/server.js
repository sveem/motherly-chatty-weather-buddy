var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = require("./router.js")

app.use(express.static(__dirname + '/../client'));
app.use("/",router)

app.get('/', function (req, res) {
  res.send('Hello World!');
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

