const jwt=require("jsonwebtoken")
const secreatekey='@123'
const auth=(req,res,next)=>{
    const barerToken=req.headers["authorization"]
    console.log("barerToken",barerToken)
    if(barerToken){
        const token=barerToken.split(" ")[1]
        console.log("token ",token)
        const validate=jwt.verify(token,secreatekey)
        console.log("Validate",validate)
        if(validate){
            next()
            
        }
        else{
            return res.send({msg:"user not authorized"})
            console.log("user Not authorised")
        }
       
    }
    else{
        console.log("user not allowed")
    }
    
    // return res.send({msg:"user not allowed"})


}
module.exports=auth