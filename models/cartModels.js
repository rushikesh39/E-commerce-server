// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "id":{type:String},
   "email":{type:String},
   "order_count":{type:Number}
});

const cart= mongoose.model('cart', productSchema);

module.exports = cart;
