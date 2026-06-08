import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
export default function FeatureProduct({setBuyproduct}){ 

  const [featuredProducts, setFeaturedProducts]=useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch("https://ecommerce-33jn.onrender.com/getfeatureproducts")
    .then(res=>res.json())
   .then(data=>setFeaturedProducts(data.featureproducts))
    .catch(err=>console.log(err)
    )
 

  },[])




  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-gray-800 font-bold ">
        <span className="text-gray-700 font-bold capitalize">Featured </span> <span className="text-red-600 font-bold capitalize">Products</span> 
      </h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "> 
        {
          featuredProducts.map((item)=>(
            <div key={item._id} className="bg-white rounded-lg shadow-md p-3 overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full  h-65 object-cover rounded-lg" />

            <h2 className="text-xl font-bold text-gray-800 mt-3">{item.title}</h2>

             <div className="flex items-center gap-4 mt-2  ">
<span>
 ⭐⭐⭐⭐⭐
</span>

<span className=" font-medium text-gray-700  ">
    (4.5)
    </span>

    </div>


            <p className="text-gray-600  mt-2 ">{item.description}</p>
           <div className="flex items-center justify-between mt-3 px-2">

                        <p className="text-green-600 font-bold ">
                            ₹ {item.price}
                        </p>

         <p className="text-red-500 font-semibold text-sm   ">
            40% OFF
        </p>

        </div>

        <div className="flex justify-between">

            <button   

            onClick={()=>{
              setBuyproduct(item)
              navigate("/buynow")
            }}            
            className="bg-blue-400 text-white px-3 py-2 rounded-lg
                         hover:bg-blue-700 mt-3 cursor-pointer capitalize text-sm font-medium mb-4
                         ">
                        
                      
                            buy now 
                        </button>

                      

                        </div>

            </div>

          ))
        }

      </div>
      </div>

      
      

      


    </>
  );
}