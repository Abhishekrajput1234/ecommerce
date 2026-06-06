const checkout = require('../model/checkout')

const getcheckout = async(req,res)=>{

    try{

        const {name,email,address,phone,pincode} = req.body

        const newcheckout = await checkout.create({

            name:name,
            email:email,
            address:address,
            phone:phone,
            pincode:pincode
        })

        if(newcheckout){

            res.status(200).json({message:"Checkout successful", newcheckout})
        }

        else{
            res.status(401).json({message:"Checkout failed"})
        }

    }

    catch(err){
        res.status(500).json({message:"Error occurred", error:err})
    }
    
}

module.exports = getcheckout