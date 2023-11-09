
const mongoose=require('mongoose')
const URL="mongodb+srv://test:aqWW9h8C6XnEYE4h@cluster0.lkhf4ct.mongodb.net/E-commerce"
const connectToDB=async()=>{
    try{
      await mongoose.connect(URL)
      console.log("database connected successfully")
    }
    catch(e){
        console.log("error during db connection",e)
    }
   
    
}

module.exports=connectToDB