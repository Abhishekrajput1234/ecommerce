const formcontact = require("../model/contactform")

const contactuser =async(req,res)=>{

    try{

        const {username,email,phone,subject,message} = req.body

        const contacts = await formcontact.create({
            username:username,
            email:email,
            phone:phone,
            subject:subject,
            message:message
        })

        if(contacts){
            res.status(200).json({message:"message sent successfully"})
        }
        else{
            res.status(400).json({message:"message not sent"})
        }

    }
    catch(error){

        res.status(500).json({message:"internal server error"})

    }
}

module.exports = contactuser