var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});
var addNumbers = function(x, y) {
  return x+y;
};
app.listen(3000);
console.log("Server Started listening on 3000")
module.exports = app;
module.exports.addNumbers = addNumbers;
