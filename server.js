const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

const server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('API listening at http://%s:%s', host, port);
});