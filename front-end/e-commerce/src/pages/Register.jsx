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
        axios.post("http://localhost:2000/register",user )
        .then(res=>console.log(res.data)  )
        .catch(err=>console.log(err))

        alert("register successfully")

     


        //console.log(user)
        //alert("register successfully")
    }
return(<>
    
 <div className=" min-h-screen flex items-center  justify-center p-8">
<div className="bg-white w-full  md:max-w-md p-6 rounded-lg shadow-md   ">
<h3 className="text-3xl text-gray-700 font-medium mb-6 text-center capitalize " >register page</h3>
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



<div className="text-center">
<button className="capitalize bg-blue-500 text-white py-1 px-4 rounded-lg
 hover:bg-blue-600 mb-3 mt-4 cursor-pointer">register</button>
</div>

</form>

<p className="text-gray-700 text-sm font-medium text-center">if Already register <Link to="/login" className="hover:text-blue-500">!Login</Link></p>


</div>

 </div>
</>)
}
