// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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
app.listen(5000,async()=>{
  try{
    await connectToDB()
    console.log("server is running on port 5000")
  }
  catch(e){
    console.log("Server not connected",e)
  }
})

// async function dbconnect(){
//     try{
//         await connectToDB(process.env.URL)
    
//     }
//     catch(e){
//         console.log(e)
//     }
// }


// async function startServer() {
//     try {
//     await dbconnect();
//       app.use("/user",userRoutes)
//       app.use('/product',productRoutes)
//       app.listen(5000, () => console.log('Server is running on port 5000'));
//     } catch (error) {
//       console.error('Error starting the server:', error);
//     }
//   }
  
//   startServer(); 