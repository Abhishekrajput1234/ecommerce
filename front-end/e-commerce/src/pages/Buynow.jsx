import { useNavigate } from "react-router-dom";
import {useState} from 'react'

export default function Buynow({buyproduct}){

    const navigate = useNavigate()

    const [quantity, setQuantity]  = useState(1)

    return(<> 

    <div className="bg-gray-100 min-h-screen py-10">

    <div className="  max-w-7xl  mx-auto p-10">
<div className="mb-8">
  <h1 className="text-4xl font-bold text-gray-900 capitalize">
     Product <span className="text-red-600">Detail page </span>
  </h1>
  <p className="text-gray-500 mt-2 font-medium">
    Explore features, pricing and product information.
  </p>
</div>
    <div className="bg-white flex gap-10 shadow-lg rounded-lg p-9">
        <div>
    <img
                    src={buyproduct.image}
                    alt={buyproduct.title}
                    className="w-90 h-100 object-cover rounded"
     />
</div>
     <div>

        <span className="bg-green-100 text-green-700 px-4  py-1 rounded-full text-sm">
  In Stock
</span>

        <h2 className="text-2xl font-bold xt-gray-700 mt-3" >{buyproduct.title}</h2>

         <div className="flex items-center gap-2 mt-2">
  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
  <span className="text-gray-500">(4.8 Reviews)</span>
</div>

        <p className="text-gray-600 font-medium mt-3">{buyproduct.description} </p>

        



        <h2 className="text-lg capitalize mt-2 text-gray-800 font-medium">quantity :</h2>

   <div className="flex items-center gap-4 mt-3">

  <div className="flex items-center bg-gray-100 rounded-full px-6 py-2 gap-6">

    <button
      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      className="text-gray-500 text-xl font-medium cursor-pointer hover:text-black"
    >
      −
    </button>

    <span className="font-semibold text-gray-800">
      {quantity}
    </span>

    <button
      onClick={() => setQuantity(quantity + 1)}
      className="text-gray-500 text-xl font-medium cursor-pointer hover:text-black"
    >
      +
    </button>

  </div>

  <div>
    <p className="text-sm font-semibold text-gray-700">
      Only {buyproduct.stock} Items Left
    </p>

    <p className="text-xs text-red-600 font-medium">
      Don't miss it
    </p>
  </div>

</div>

   <div className="flex items-center gap-3 mt-3">
  <span className="text-2xl font-bold text-gray-700">
    ₹{buyproduct.price * quantity}
  </span>

  <span className="line-through text-gray-400">
    ₹{Math.floor(buyproduct.price * 1.4) * quantity}
  </span>

  <span className="text-green-600 font-semibold">
    40% Off
  </span>
</div>


        <div className="flex gap-6 mt-6">

<button className="bg-yellow-500 px-8 py-2 text-sm font-medium rounded-lg cursor-pointer text-white">
  Add To Cart
</button>

<button
  onClick={() =>
    navigate("/checkout", {
      state: {
        product: buyproduct,
        quantity: quantity,
      },
    })
  }
  className="bg-blue-600 px-8 py-2 text-sm font-medium rounded-lg cursor-pointer text-white"
>
  Buy Now
</button>

</div>

     </div>





    </div>


    </div>
    </div>

    
    
    
    </>)
}