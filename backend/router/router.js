const express = require("express")
const {registerUser,loginUser} = require("../controller/userregister")  
const {productview,getproducts}  = require("../controller/productcontroller")
const getfeatureproducts = require("../controller/featureproducts")
const checkout = require("../controller/checkout")
const {createDeal,getDeals} = require("../controller/deal")

var router = express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getfeatureproducts",getfeatureproducts)
router.get("/products",productview)
router.get("/getproducts",getproducts)
router.post("/checkout",checkout)
router.get("/deal",createDeal)
router.get("/getdeal",getDeals)



module.exports=router