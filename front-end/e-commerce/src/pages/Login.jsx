import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function Login(){
    const[login,setLogin]=useState({

        email:"",
        password:""
    })

    //input handler

    function inputHandler(e){
       const {name,value}=e.target
       setLogin({...login,[name]:value})
   
       }


       

// submit handler

const submithandler=async(e)=>{
    e.preventDefault()

  /*  if(login.email === "" || login.password === ""){
        alert("email and password is required")
        return;
    }
        */

    if (!login.email || !login.password) {

        alert("email and password is required");
        return;
    }


    try {

        const res = await axios.post(
          "https://ecommerce-33jn.onrender.com/login",
            login
        );

        console.log(res.data);

        alert("login successfully");

    } catch (err) {

        console.log(err);

        alert("invalid email or password");
    }
};

    return(<>

    <div className=" min-h-screen flex items-center bg-gray-100  justify-center p-8">
    <div className="bg-white w-full md:max-w-lg p-10 rounded-lg shadow-md">
 <h2 className="text-3xl font-bold text-center text-gray-700 mb-2">
  <span className="text-blue-700">Welcome</span>
  <span className="text-gray-600"> Back</span>
</h2>

<p className="text-center text-gray-500 mb-6 font-medium">
  Login to access your account
</p>
    <form className="space-y-3"  onSubmit={submithandler} >

        <div>
        <label className="block text-gray-600 font-medium capitalize text-sm mb-1">email</label>
        <input type="text" placeholder="enter email"
        name="email"
        value={login.email}
        onChange={inputHandler}
         className="border border-gray-400 w-full px-4 rounded-lg p-2 focus:outline-none " autoComplete="off"/>
        </div>

        <div>
         <label className="block text-gray-600 font-medium capitalize text-sm mb-1">password</label>
        <input type="password" placeholder="enter password" 
        name="password" value={login.password} 
        onChange={inputHandler}
         className="border border-gray-400 w-full px-4 rounded-lg p-2 focus:outline-none" autoComplete="off"/>
        </div>

<div className="text-center">
<button className="capitalize bg-blue-500 w-full text-white py-2 px-4 rounded-lg
 hover:bg-blue-600  mt-2 font-bold text-lg  cursor-pointer">login</button>

</div>

 <p className="text-center mt-2 font-medium text-gray-600">
  New Account ?

  <Link
    to="/register"
    className="ml-2 text-blue-600 font-semibold hover:underline"
  >
    Register
  </Link>
</p>

    </form>
    </div>
    </div>
    
   </>)


}