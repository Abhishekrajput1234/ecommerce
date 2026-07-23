import {useState, useEffect} from 'react'
export default function Deal(){

    const[deal,setDeal]=useState([])

    const fetchdeal=()=>{

      fetch("http://localhost:2000/deal")
        .then((res)=>res.json())
        .then((data)=>setDeal(data))
        .catch((err)=>{
            console.log("error :" , err);
        })
    }

    useEffect(()=>{

        fetchdeal();


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


     
   


    </>)
}