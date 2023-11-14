const express=require('express')
const router=express.Router();
const {mobile, computer, jewellary, fashion, footwear, watches, home, insert_Cart_details, find_Cart_details, search}=require('../controller/productController')


router.get("/",home)
router.get('/mobile',mobile)
router.get('/computer',computer)
router.get('/jewellery',jewellary)
router.get("/fashion",fashion)
router.get("/footwear",footwear)
router.get("/watches",watches)
router.get("/search",search)
router.post("/insert_cart_data",insert_Cart_details)
router.get("/cartdetails",find_Cart_details)

module.exports=router