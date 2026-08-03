const express = require("express")
const {registerUser,loginUser} = require("../controller/userregister")  
const {productview,getproducts,deleteproducts}  = require("../controller/productcontroller")
const getfeatureproducts = require("../controller/featureproducts")
const checkout = require("../controller/checkout")
const {createDeal,getDeals,deletedeal} = require("../controller/deal")
const {trendingproduct,Addtrending} = require("../controller/trending")

var router = express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getfeatureproducts",getfeatureproducts)
router.get("/products",productview)
router.get("/getproducts",getproducts)
router.post("/checkout",checkout)
router.get("/deal",createDeal)
router.get("/getdeal",getDeals)
router.delete("/dealdelete", deletedeal)
router.get("/trending", trendingproduct)
router.delete("/productdelete", deleteproducts)
router.put("/update/:id",Addtrending)



module.exports=router