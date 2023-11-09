const express=require('express')
const router=express.Router();
const {register,login, cart}=require('../controller/userController');
const auth = require('../middleware/userAuth');


router.post('/register',register)
router.post('/login',login)
router.get("/cart",auth,cart)
module.exports=router