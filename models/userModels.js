const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    userName:{type:String},
    mobile:{type:Number},
    email:{type:String},
    password:{type:String},
})
module.exports=mongoose.model('users',userSchema)