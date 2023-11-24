// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const stripe=require("stripe")("sk_test_51OFa7xSI55uByng4ykFMInzewhC3lSJ2f9ElSCaYIgNjcOPZ50mpcmB7t9jf8QzLeUBcv3egMxRpmL3KlyX7hEfW00Y2yKHXqS")
require('dotenv').config()

const connectToDB=require('./db/connection')
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/product",productRoutes)
app.use(userRoutes)

app.post("/api/create-checkout-session",async(req,res)=>{
  const {products}=req.body;
  console.log(products)
  
const lineItems=products.map((product)=>({
    price_data:{
      currency:"inr",
      product_data:{
        name:product.product_name,
      },
      unit_amount:product.discounted_price*100,
    },
    quantity:product.quantity

  }))

  const session=await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"https://shopeswift.netlify.app/success",
    cancel_url:"https://shopeswift.netlify.app/cancel",
  })
  res.send({id:session.id})
})

app.listen(5000,async()=>{
  try{
    await connectToDB()
    console.log("server is running on port 5000")
  }
  catch(e){
    console.log("Server not connected",e)
  }
})

