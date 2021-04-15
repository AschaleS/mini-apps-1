const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('once', function() {
  console.log('Connection Successful');
});

let shoppingSchema = new mongoose.Schema({

    name: {type: String},
    email: {type: String},
    order_id: {type: String, unique: true, index: true},
    password: {type: {}},
    address_line1: { type: String},
    address_line2: { type: String},
    city: { type: String},
    state: { type: String},
    zip_code: { type: Number},
    phone_number: { type: Number},
    card_number: {type: Number},
    expiry_date: {type: Number},
    cvv: {type: Number},
    billing_zip: {type: Number}
})

let Shopping = mongoose.model('Shopping', shoppingSchema);
Shopping.createIndexes();

let save = (shopping, callback) => {
    const query = { "order_id": shopping.order_id };
    const update = { $set: { "email": shopping.email, "name": shopping.name, "password": shopping.password } };
    const options = { upsert: true };
    Shopping.updateOne(query, update, options, callback);
};

let saveShipping = (shipping, callback) => {
  const query = { "order_id": shipping.order_id };
  const update = { $set: { "address_line1": shipping.addressLine1, "address_line2": shipping.addressLine2, "city": shipping.city, "state": shipping.state, "zip_code": shipping.zip_code, "phone_number": shipping.phone_number } };
  const options = { upsert: true };
  Shopping.updateOne(query, update, options, callback);
};

let saveBilling = (billing, callback) => {
  const query = { "order_id": billing.order_id };
  const update = { $set: { "card_number": billing.cc_number, "expiry_date": billing.exp_date, "cvv": billing.cvv, "billing_zip": billing.billing_zip }};
  const options = { upsert: true };
  Shopping.updateOne(query, update, options, callback);
};

module.exports = { save, saveShipping, saveBilling };
