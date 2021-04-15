const express = require('express');
const db = require('./database.js');
const bodyParser = require('body-parser');
const { save, saveShipping, saveBilling }= require('./database.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/account', function (req, res) {
  console.log("this is what is being recieved by the server: ", req.body)
  save(req.body, (response) => {
    res.send({ message: "info saved successfully in db" });
    res.end();
  });
});

app.post('/shipping', function (req, res) {
  console.log("this is what is being recieved by the server: ", req.body)
  saveShipping(req.body, (response) => {
    res.send({ message: "info saved successfully in db" });
    res.end();
  });
});

app.post('/billing', function (req, res) {
  console.log("this is what is being recieved by the server: ", req.body)
  saveBilling(req.body, (response) => {
    res.send({ message: "info saved successfully in db" });
    res.end();
  });
});

app.listen(4000, function () {
  console.log('Server started and listening on port 4000');
});

