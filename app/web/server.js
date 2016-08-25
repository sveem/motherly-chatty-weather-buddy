
//Server with Express
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../..client'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

