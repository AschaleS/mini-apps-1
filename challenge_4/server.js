var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));



app.listen(3600, function() {
  console.log('Server started and listening on port 3600');
});

