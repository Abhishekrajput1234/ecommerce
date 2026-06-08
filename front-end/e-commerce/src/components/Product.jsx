import { useState, useEffect } from "react"
import {useNavigate} from "react-router-dom"

export default function Product({setBuyproduct, setCart}){

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    const fetchdata = ()=>{

        fetch("https://ecommerce-33jn.onrender.com/getproducts")

        .then((res)=>res.json())

        .then((json)=>{

            console.log(json)

            // STORE ONLY ARRAY

            setProducts(json.products)

        })

        .catch((err)=>console.log(err))

    }

    useEffect(()=>{

        fetchdata()

    },[])

    const buynow = (item)=>{

    // STORE PRODUCT

    setBuyproduct(item)

    // GO TO BUY PAGE

    navigate("/buynow")

}


// Add to cart function

const addToCart = (item) => {
  console.log("Adding:", item);
  setCart((prev) => [...prev, item]);
};
    return(

        <>

        <h1 className="text-3xl font-bold text-center my-5">
            Product List
        </h1>

      

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">

            {

                products.map((item)=>(

                    <div
                        key={item._id}
                        className="bg-white shadow-lg rounded-lg p-4"
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover rounded"
                        />

                        <h2 className="text-xl font-semibold mt-3">
                            {item.title}
                        </h2>

                         {/* RATING */}

    
    <div className="flex items-center gap-4 mt-2  ">
<span>
 ⭐⭐⭐⭐⭐
</span>

<span className=" font-medium text-gray-700  ">
    (4.5)
    </span>

    </div>

                        <p className="text-gray-600 mt-2">
                         {item.description}
                        </p>

   
 <div className="flex items-center justify-between mt-3 px-2">

                        <p className="text-green-600 font-bold ">
                            ₹ {item.price}
                        </p>

         <p className="text-red-500 font-semibold text-sm   ">
            40% OFF
        </p>

        </div>

        <div className="flex items-center justify-between  mt-2 px-2">
                    

                        <button onClick={()=>buynow(item)}
                        
                        className="bg-blue-400 text-white px-3 py-2 rounded-lg
                         hover:bg-blue-700 mt-3 cursor-pointer capitalize text-sm font-medium ">
                            buy now 
                        </button>


                          <button
                        onClick={() => addToCart(item)}
                        className="bg-blue-400 text-white px-3 py-2 rounded-lg
                         hover:bg-blue-700 mt-3 cursor-pointer capitalize text-sm font-medium ">
                            Add to cart
                        </button>
                        </div>

                    </div>

                ))

            }

        </div>

        </>

    )

}