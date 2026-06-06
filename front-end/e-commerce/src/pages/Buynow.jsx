import { useNavigate } from "react-router-dom";
import {useState} from 'react'

export default function Buynow({buyproduct}){

    const navigate = useNavigate()

    const [quantity, setQuantity]  = useState(1)

    return(<> 

    <div className="bg-gray-100 min-h-screen py-10">

    <div className="  max-w-7xl  mx-auto p-10">

    <h1 className="text-3xl font-bold mb-10 capitalize ">product detail page  </h1>

    <div className="bg-white flex gap-8 shadow-lg rounded-lg p-9">
        <div>
    <img
                    src={buyproduct.image}
                    alt={buyproduct.title}
                    className="w-90 h-80 object-cover rounded"
     />

     <div className="flex items-center gap-2 mt-4">
  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
  <span className="text-gray-500">(4.8 Reviews)</span>
</div>
</div>
     <div>

        <h2 className="text-2xl font-bold xt-gray-700" >{buyproduct.title}</h2>

        <p className="text-gray-600 font-medium mt-3">{buyproduct.description} </p>



        <h2 className="text-lg capitalize mt-2 text-gray-800 font-medium">quantity :</h2>

        <div className="flex items-center gap-4 mt-4">

     

         <button 
           onClick={()=>setQuantity(quantity-1)}
        className="bg-blue-400 text-xl text-white px-2 py-1 cursor-pointer rounded-lg ">

            -

        </button>

        <h2> {quantity}</h2>

          <button 
        onClick={()=>setQuantity(quantity+1)}
        
        className="bg-blue-400 text-white text-xl px-2 py-1 cursor-pointer rounded-lg  ">

            +
  
        </button>
       

        </div>

  <p className="text-lg text-gray-800 font-semibold mt-4">
  Total: ₹ {buyproduct.price * quantity}
</p>

        <button 
        onClick= {()=>navigate("/checkout")}
        
        className="bg-blue-400 text-white font-medium  px-4 rounded-full mt-5 py-1 hover:bg-blue-600 
        cursor-pointer">  
            proceed to payment
        </button>


     </div>





    </div>


    </div>
    </div>

    
    
    
    </>)
}