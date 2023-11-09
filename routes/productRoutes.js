const express=require('express')
const router=express.Router();
const {mobile, computer, jewellary, fashion, footwear, watches, home}=require('../controller/productController')


router.get("/",home)
router.get('/mobile',mobile)
router.get('/computer',computer)
router.get('/jewellery',jewellary)
router.get("/fashion",fashion)
router.get("/footwear",footwear)
router.get("/watches",watches)

module.exports=router