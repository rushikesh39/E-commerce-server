const mongoose=require('mongoose')
const Schema=mongoose.Schema
const productSchema=new Schema({
    "uniq_id":{type:String},
    "crawl_timestamp":{type:String},
    "product_name":{type:String},
    "product_category_tree":{type:Array},
    "pid":{type:String},
    "retail_price":{type:Number},
    "discounted_price":{type:Number},
    "image":{type:Array},
    "is_FK_Advantage_product":{type:Boolean},
    "description":{type:String},
    "product_rating":{type:String},
    "overall_rating":{type:String},
    "brand":{type:String},
    "product_specifications":{type:String
    }


})
module.exports=mongoose.model('products',productSchema)