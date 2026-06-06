import {useState} from "react"
import {useNavigate} from "react-router-dom"
export default function Payment(){

    const[paymentMethod,setPaymentMethod]=useState("")

    const navigate = useNavigate()

    const placeorder=()=>{

        if(!paymentMethod){
            alert("please select payment method")
            return;
        }

        else{
            alert("order placed successfully with "+paymentMethod)
        }

        console.log("Selected payment method:", paymentMethod)

        navigate("/ordersuccess")

        
    }

    

    return(<>

    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
    <div className="bg-white shadow-lg rounded-lg p-10 w-full md:max-w-md">
    <h2 className="text-2xl text-gray-700 font-bold text-center mb-6 ">Payment Methods</h2>

    <div className="space-y-4">

    <label
  className={`border border-gray-400 rounded-lg p-4 flex items-center gap-3 cursor-pointer transition
  ${paymentMethod === "COD"
    ? "border-blue-500 bg-blue-50"
    : "border-gray-300 hover:border-blue-300"}`}
>
  <input
    type="radio"
    name="payment"
    value="COD"
    checked={paymentMethod === "COD"}
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <div>
    <h3 className="font-semibold">Cash on Delivery</h3>
    <p className="text-sm text-gray-500">
      Pay when your order arrives
    </p>
  </div>
</label>

    <label 
    className={` border border-gray-400 rounded-lg p-4 flex items-center gap-3 cursor-pointer transition 
    ${paymentMethod === "UPI" 
    ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-300"}`}
    >
    <input
      type="radio"
      name="payment"
      value="UPI"
      checked={paymentMethod === "UPI"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <div>
    <h2 className="font-semibold">UPI Payment</h2>
     <p className="text-sm text-gray-500">pay using your UPI ID</p>
    </div>
  
  </label>

  <label 
    className={` border border-gray-400 rounded-lg p-4 flex items-center gap-3 cursor-pointer transition 
    ${paymentMethod === "CARD" 
    ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-300"}`}
    >
    <input
      type="radio"
      name="payment"
      value="CARD"
      checked={paymentMethod === "CARD"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <div>
    <h2 className="font-semibold">Credit / Debit Card</h2>
     <p className="text-sm text-gray-500">pay using your credit or debit card</p>
    </div>
  
  </label>

  </div>

  <button
  onClick={placeorder}
  className="bg-blue-500 text-white px-4 py-2 rounded-lg capitalize
   w-full hover:bg-blue-600 transition-colors duration-300 mt-5 cursor-pointer ">
    place order
  </button>

    </div>

    </div>
    
    
    </>)
}