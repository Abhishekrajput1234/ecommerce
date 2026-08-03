import {useState, useEffect} from 'react'
export default function Deal(){

    const[deal,setDeal]=useState([])
    const [trending, setTrending]=useState([])


const fetchtrend = () => {
    fetch("http://localhost:2000/trending")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);              // Entire response object
            console.log(data.products);     // Only the products array

            setTrending(data.products);
        })
        .catch((error) => {
            console.log("error", error);
        });
};


    const fetchdeal=()=>{

      fetch("http://localhost:2000/getdeal")
        .then((res)=>res.json())
        .then((data)=>setDeal(data))
        .catch((err)=>{
            console.log("error :" , err);
        })
    }

    //fetch trending products 

    useEffect(()=>{

        fetchdeal();
        fetchtrend();


    },[])



    return(<>
    
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                        {/* Left Side */}
                        <div>

                            <p className="text-white font-semibold text-lg mb-2">
                                🔥 Limited Time Offer
                            </p>

                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Today's <br />
                                Best Deals
                            </h1>

                            <p className="text-white mt-6 text-lg">
                                Save up to <span className="font-bold">70% OFF</span> on
                                Electronics, Fashion, Shoes, Mobiles and many more.
                                Don't miss today's exclusive offers.
                            </p>

                            <button className="mt-8 bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                                Shop Now
                            </button>

                        </div>

                        {/* Right Side */}
                        <div className="flex justify-center">

                            <img
                                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700"
                                alt="Deals Banner"
                                className="w-full max-w-lg rounded-2xl shadow-2xl"
                            />

                        </div>

                    </div>

                </div>

                     </section>


    <div className="max-w-7xl mx-auto py-12 px-5">

    <h2 className="text-4xl font-bold text-center mb-8">
        🔥 Today's Best Deals
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

        {
            deal.map((item) => (

                <div
                    key={item._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >

                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-52 object-cover"
                    />

                    <div className="p-4">

                        <h3 className="text-lg font-semibold">
                            {item.title}
                        </h3>

                        <div className="flex items-center justify-between mt-3">

                            <span className="text-2xl font-bold text-red-600">
                                ₹{item.price}
                            </span>

                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                                {item.discount}% OFF
                            </span>

                        </div>

                        <button
                            className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer"
                        >
                            Shop Now
                        </button>

                    </div>

                </div>

            ))
        }

    </div>

</div>




<div className="max-w-7xl mx-auto py-12 px-5">

    <h2 className="text-4xl font-bold text-center mb-8">
        ⭐ Trending Products
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

        {
            trending.map((item) => (

                <div
                    key={item._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-4">

                        <h3 className="text-lg font-semibold">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                            {item.description}
                        </p>

                        <div className="flex justify-between items-center mt-4">

                            <span className="text-2xl font-bold text-orange-600">
                                ₹{item.price}
                            </span>

                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                                {item.stock} Left
                            </span>

                        </div>

                        <button
                            className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300 cursor-pointer"
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>

            ))
        }

    </div>

</div>




       


     
   


    </>)
}