import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function Register(){
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
        
    })

    //INPUT HANDLER

    function inputHandler(e){
    const {name,value}=e.target
    setUser({...user,[name]:value})

    }

    //submit

    const submithandler=(e)=>{
        e.preventDefault()

        if(user.password!==user.confirmPassword){
            alert("password and confirm password should be same")
            return
        }

        if(!user.name || !user.email|| !user.password
|| !user.confirmPassword){
    alert("all fields are required")
    return  
}
      axios.post("https://ecommerce-33jn.onrender.com/register", user)
        .then(res=>console.log(res.data)  )
        .catch(err=>console.log(err))

        alert("register successfully")

     


        //console.log(user)
        //alert("register successfully")
    }
return(<>
    
 <div className=" min-h-screen flex items-center bg-gray-100  justify-center p-8">
<div className="bg-white w-full  md:max-w-lg p-10 rounded-lg shadow-md   ">
<h2 className="text-3xl font-bold text-center text-gray-700 mb-2">
  <span className="text-blue-700 font-bold">Create</span> <span className="text-gray-600 font-bold"> Account</span>
</h2>

<p className="text-center text-gray-500  mb-6 font-medium">
  Join our store and start shopping today
</p>
<form className="space-y-3" onSubmit={submithandler}>

<div>
<label className="block text-gray-600 font-medium capitalize text-sm mb-1">enter name</label>
<input type="text"
 placeholder="enter name"
 name="name"
 value={user.name}
 onChange={inputHandler}
  className="border border-gray-400 w-full px-4 rounded-lg p-2 focus:outline-none "/>
</div>

<div>
    <label className="block text-gray-600 font-medium capitalize text-sm mb-1">email</label>
<input type="text" 
 placeholder=" enter email" value={user.email}
 name="email"
 onChange={inputHandler}   className="border border-gray-400 w-full px-4 rounded-lg p-2 focus:outline-none "/>
</div>


<div>
<label className="block text-gray-600 font-medium capitalize text-sm mb-1">enter password</label>
<input type="text" 
placeholder=" entet password"
value={user.password}
onChange={inputHandler}
name="password"
 className="border border-gray-400 w-full px-4 rounded-lg p-2 focus:outline-none "/>
</div>


<div>
    <label className="block text-gray-600 font-medium capitalize text-sm mb-1">confirm password</label>
<input type="text"
 placeholder="confirm password"
 name="confirmPassword"
 value={user.confirmPassword}
 onChange={inputHandler}
  className="border border-gray-400 w-full px-4 rounded-lg p-2 focus:outline-none "/>
</div>



<div>
<button className="capitalize bg-blue-500 w-full text-white py-2 px-4 rounded-lg
 hover:bg-blue-600  mt-2 font-bold text-lg  cursor-pointer">register</button>
</div>

</form>

<p className="text-center mt-3 font-medium text-gray-600">
  Already have an account?

  <Link
    to="/login"
    className="ml-2 text-blue-600 font-semibold hover:underline"
  >
    Login
  </Link>
</p>


</div>

 </div>
</>)
}
