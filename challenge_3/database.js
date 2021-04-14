const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('once', function(
  console.log('Connection Successful');
));

let shoppingSchema = new mongoose.Schema({
  Form1: {
    Name: {type: String},
    Email: {type: String},
    Password: {type: {}}
  },

  Form2: {
    Address_Line1: { type: String},
    Address_Line2: { type: String},
    City: { type: String},
    State: { type: String},
    Zip_Code: { type: Number},
    Phone_Number: { type: Number}
  },

  Form3: {
    Card_Number: {type: Number},
    Expiry_Date: {type: Number},
    Cvv: {type: Number},
    Billing_Zip: {type: Number}
  }
});

let Shopping = mongoose.model('Shopping', shoppingSchema);

module.exports = Shopping;
