const productlist = require("../model/productlist")

const getfeatureproducts = async(req,res)=>{

    try{

        const featureproducts = await productlist.find({
            featured:true
        })

        if(featureproducts.length > 0){

            res.status(200).json({message:"Featured products retrieved successfully", featureproducts})
        }

        else{
            res.status(401).json({message:"No featured products found"})
        }

    }

    catch(err){

        res.status(500).json({
            error:err.message
        })

    }
}

module.exports= getfeatureproducts 