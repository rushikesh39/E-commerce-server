// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
   "email":{type:String},
   "products":{type:Array},
});

const cart= mongoose.model('cart', productSchema);

module.exports = cart;
