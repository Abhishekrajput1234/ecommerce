import { useState } from "react"
import axios from "axios"
import {useNavigate,useLocation} from "react-router-dom"


export default function CheckoutPage(){

    const location = useLocation();

    const { product, quantity } = location.state || {};



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

    
         axios.post("https://ecommerce-33jn.onrender.com/checkout", checkout) 
        .then(res=>console.log(res.data)  )
        .catch(err=>console.log(err))

        navigate("/payment")

        
    }

    const navigate= useNavigate()

    return(<>

    <div className="bg-gray-100 min-h-screen p-8">

    

        
          
        
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-9">


<h2 className="text-3xl text-center font-bold mb-3 text-gray-700 capitalize">
  <span className="text-gray-700 font-bold">Checkout </span> 
  <span className="text-red-500 font-bold">page</span> 
  </h2>


    <div className="flex items-center justify-center gap-6 text-lg mb-2 font-medium ">

         <span className="text-green-500">Cart ✓</span>
  <span className="text-gray-400">→</span>

  <span className="text-green-500">Checkout ✓</span>
  <span className="text-gray-400">→</span>

  <span className="text-gray-500">Payment</span>

    </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 p-9  mt-3">

  <div>

 <h2 className="text-3xl font-bold text-gray-700 mb-8  capitalize">
    Order Summary
  </h2>

  <div className="flex gap-8 border-b pb-5">

    <img
      src={product?.image}
      alt={product?.title}
      className="w-48 h-48 rounded-lg object-cover"
    />

    <div>

      <h3 className="font-semibold text-2xl text-gray-800">
        {product?.title}
      </h3>

      <p className="text-gray-700 text-xl font-medium mt-1">
        Quantity: {quantity}
      </p>

      <p className="text-green-600 text-lg font-semibold mt-2">
        In Stock
      </p>

    </div>

  </div>

  <div className="space-y-3 mt-6">

    <div className="flex justify-between">
      <span className="text-gray-600">
        Price
      </span>

      <span>
        ₹{product?.price}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600">
        Quantity
      </span>

      <span>
        {quantity}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600">
        Delivery
      </span>

      <span className="text-green-600">
        Free
      </span>
    </div>

    <hr />

    <div className="flex justify-between text-xl font-bold">

      <span>Total</span>

      <span className="text-blue-600">
        ₹{product?.price * quantity}
      </span>

    </div>

    </div>
    </div>





<form className="space-y-3" onSubmit={submithandler}>

<h2 className="text-2xl font-bold capitalize text-gray-700 mb-6">Shipping Details</h2>
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
<button
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition cursor-pointer mt-2"
>
  Proceed to Secure Payment →
</button>

</form>


        </div>

    </div>
    </div>
  
    
    
    </>)
}