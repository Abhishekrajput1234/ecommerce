const userregister= require("../model/register")


const registerUser=async(req,res)=>{
    try{

        const {name,email,password,confirmPassword}=req.body

        const user =  await userregister.create({
            name:name,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        })

        
        if(user){
            res.status(201).json({message:"User registered successfully"})
        }

        else{
            res.status(401).json({message:"User registration failed"})
        }

    }
    catch(err){

    console.log(err)

    res.status(500).json({
        message:"Internal server error",
        error:err.message
    })

}
}

const loginUser=async(req,res)=>{
    try{

        const{email,password}=req.body;


        const userlogin= await userregister.findOne({email:email,password:password}) 

        if(userlogin){
            res.status(200).json({message:"login successfully"})
        }

        else{
            res.status(401).json({message:"Invalid email or password"})
        }

    }
    


    

    catch(err){
        res.status(500).json({
            message:"Internal server error",
            error:err.message
        })  

    }
}





module.exports={registerUser,loginUser}