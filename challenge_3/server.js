const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());



app.listen(4000, function(){
  console.log('Server started and listening on port 4000');
});

