const express = require('express');
const parser = require('body-parser');
//const pug = require('pug');
//const path = require('path');

const app = express();

app.use(express.static('client'));
app.use(parser());


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.set('views', 'client');
app.set('view engine', 'pug');


app.post('/', (req, res) => {
  res.statusCode = 200
  console.log("this is the incoming datatype", req.body);
  //res.render('index_new', {data: req.body});
  res.render("index_2", {data: req.body});
  res.end();
  // next();
})



module.exports = app;
