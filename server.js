var express = require('express');
var app = express();
app.use('/files', express.static(__dirname + '/src'));

app.get('/*', function (request, response){
  response.sendFile(__dirname + '/src/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server started');
});
