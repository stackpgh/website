var express = require('express');
var app     = express();
var path    = require('path');

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.listen(3000);

console.log('running on port 3000');
