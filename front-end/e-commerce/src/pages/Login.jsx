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
            "http://localhost:2000/login",
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

    <div className=" min-h-screen flex items-center  justify-center p-8">
    <div className="bg-white md:max-w-md w-full p-8 rounded-lg shadow-md">
    <h2 className="text-3xl text-gray-700 font-medium mb-4 text-center capitalize " >login page</h2>
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
<button className="capitalize bg-blue-500 text-white py-1 px-4 rounded-lg
 hover:bg-blue-600  mt-4 cursor-pointer ">login</button>

</div>
 
<p className="text-gray-700 font-medium text-sm  text-center capitalize"> new user ?<Link to="/register" className="hover:text-blue-500"> register</Link></p>

    </form>
    </div>
    </div>
    
   </>)


}