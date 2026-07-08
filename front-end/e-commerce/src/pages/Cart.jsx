export default function Cart({cart}){
    return(<>

    <div className="max-w-7xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>

    {
        cart.length === 0 ? (
            <p className="text-gray-700 text-xl ">your cart is empty</p>
        ) : (

            cart.map((item, index)=>(

                <div key={index}  className="flex gap-8 shadow p-4 mb-4 rounded">
                    <img src={item.image}
                    alt={item.title}
                    className="w-64 h-64 object-cover rounded"
                    />

                     <div>
              <h2 className="font-semibold text-2xl text-gray-800">
                {item.title}
              </h2>

           

            <p className="text-gray-600 mt-2 text-lg ">
                         {item.description}
                        </p>

                           <p className="text-2xl font-bold text-gray-800">₹ {item.price}</p>
           

                        </div>

                </div>
            ))
        )
    }

    </div>
    
    
    </>)
}