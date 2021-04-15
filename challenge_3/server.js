const express = require('express');
const db = require('./database.js');
const bodyParser = require('body-parser');
const save = require('./database.js');

const app = express();

app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/account', function (req, res) {
  console.log("this is what is being recieved by the server: ", req.body)
  const { name:name, email:email, password:password } = req.body;
  console.log("this is what is being send by the server: ", res.body)
    res.send({ message: "info saved successfully in db" });
    res.end();
  });


app.post('/shipping', function (req, res) {
  console.log("this is what is being recieved by the server: ", req.body)
  const {
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    city: city,
    state: state,
    zip_code: zip_code,
    phone_number: phone_number } = req.body;
  console.log("this is what is being send by the server: ", res.body)

    res.send({ message: "info saved successfully in db" });
    res.end();
  });


app.post('/billing', function (req, res) {
  console.log("this is what is being recieved by the server: ", req.body)
  const {
    cc_number: cc_number,
    exp_date: exp_date,
    cvv: cvv,
    billing_zip: billing_zip} = req.body;
  console.log("this is what is being send by the server: ", res.body)

    res.send({ message: "info saved successfully in db" });
    res.end();
  });


app.listen(4000, function () {
  console.log('Server started and listening on port 4000');
});

