const mongoose=require('mongoose')
const Schema=mongoose.Schema
const productSchema=new Schema({
    "product_name":{type:String},
    "product_category_tree":{type:Array},
    "retail_price":{type:Number},
    "discounted_price":{type:Number},
    "image":{type:Array},
    "description":{type:String},
    "product_rating":{type:String},


})
module.exports=mongoose.model('products',productSchema)