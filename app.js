var express = require('express');
var app     = express();
var path    = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
