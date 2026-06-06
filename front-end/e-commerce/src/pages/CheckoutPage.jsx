import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function CheckoutPage(){
    const[checkout,setCheckout]=useState({
        name:"",
        email:"",
        address:"",
        phone:"",
        pincode:"",
    })

    //input handler

   const handelInput=(e)=>{

        setCheckout({...checkout,[e.target.name]:e.target.value})

    }

    //submit handler

    const submithandler=(e)=>{
        e.preventDefault()
        if(!checkout.name || !checkout.email || !checkout.address || !checkout.phone || !checkout.pincode){
            alert("please fill all the fields")
            return
        }

    
         axios.post("http://localhost:2000/checkout", checkout) 
        .then(res=>console.log(res.data)  )
        .catch(err=>console.log(err))

        navigate("/payment")

        
    }

    const navigate= useNavigate()

    return(<>

    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:max-w-md ">
<h2 className="text-2xl text-center font-bold mb-8 text-gray-700 capitalize">Checkout page</h2>

<form className="space-y-3" onSubmit={submithandler}>

<div>
<label className="block text-gray-600 font-medium text-sm capitalize ">Full name</label>
<input type="text" 
placeholder="full name" 
name="name"
value={checkout.name}
onChange={handelInput}
className="border w-full border-gray-300 p-2 rounded-lg capitalize outline-none"
/>
</div>

<div>
<label className="block text-gray-600 font-medium capitalize text-sm">email</label>
<input type="text" 
placeholder="enter email" 
name="email"
value={checkout.email}
onChange={handelInput}
className="border w-full border-gray-300 p-2 rounded-lg capitalize outline-none"
/>
</div>

<div>

<label className="block text-gray-600 font-medium capitalize text-sm">Address</label>
<input type="text"
 placeholder="enter address"
 name="address"
 value={checkout.address}
 onChange={handelInput}
 className="border w-full border-gray-300 p-2 rounded-lg capitalize outline-none"/>
</div>

<div>

<label className="block text-gray-600 font-medium capitalize text-sm">phone number</label>
<input type="text" 
placeholder="enter phone number" 
name="phone"
value={checkout.phone}
onChange={handelInput}
className="border w-full border-gray-300 p-2 rounded-lg capitalize outline-none"/>
</div>

<div>

<label className="block text-gray-600 font-medium capitalize text-sm">pincode</label>
<input type="text" 
placeholder="enter pincode" 
name="pincode"
value={checkout.pincode}
onChange={handelInput}
className="border w-full border-gray-300 p-2 rounded-lg capitalize outline-none"/>

</div>

<button onClick={submithandler} className="bg-blue-500 hover:bg-blue-600 text-white 
font-medium py-2 px-4 rounded-lg capitalize mt-2 cursor-pointer">proceed to payment</button>

</form>


        </div>

    </div>
    
    
    </>)
}