import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
export default function FeatureProduct({setBuyproduct,cart,setCart}){ 

  const [featuredProducts, setFeaturedProducts]=useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch("https://ecommerce-33jn.onrender.com/getfeatureproducts")
    .then(res=>res.json())
   .then(data=>setFeaturedProducts(data.featureproducts))
    .catch(err=>console.log(err)
    )
 

  },[])

  const addToCart = (item)=>{

    const alreadyExists = cart.find(
        (product) => product._id === item._id
    );

    if(alreadyExists){
        alert("Product already added!");
        return;
    }

    setCart([...cart, item]);

    alert("Product added to cart!");

  }




  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl text-gray-800 font-bold ">
        <span className="text-gray-700 font-bold capitalize">Featured </span> <span className="text-red-600 font-bold capitalize">Products</span> 
      </h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "> 
        {
          featuredProducts.map((item)=>(
            <div key={item._id} className="bg-white rounded-lg shadow-md p-3  overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full  h-65 object-cover rounded-lg" />

            <h2 className="text-xl font-bold text-gray-800 mt-3">{item.title}</h2>

             <div className="flex items-center justify-between mt-2 px-1 ">
              <div>
<span>
 ⭐⭐⭐⭐⭐
</span>

<span className=" font-medium text-gray-700  ">
    (4.5)
    </span>
    </div>

    
  <span className=" text-gray-600 text-sm font-bold">
    1.2k Reviews
  </span>

    </div>


            <p className="text-gray-600  mt-3 ">{item.description}</p>

    

    <div className="flex items-center gap-3 mt-3">
  <span className="text-2xl font-bold text-gray-600">
    ₹{item.price}
  </span>

  <span className="line-through text-gray-400">
    ₹{Math.floor(item.price * 1.4)}
  </span>

  <span className="text-green-600 font-semibold">
    40% Off
  </span>
</div>

        <div className="flex flex-col  ">

          <button 
          onClick={()=>addToCart(item)}
            className="bg-yellow-500 w-full text-white px-3 py-2 rounded-lg
                         hover:bg-yellow-600 mt-3 cursor-pointer capitalize text-sm font-medium ">
            Add to cart
          </button>

            <button   

            onClick={()=>{
              setBuyproduct(item)
              navigate("/buynow")
            }}            
       className="    bg-blue-400 text-white px-3 py-2 rounded-lg
                         hover:bg-blue-700 mt-3 w-full cursor-pointer capitalize text-sm font-medium 
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