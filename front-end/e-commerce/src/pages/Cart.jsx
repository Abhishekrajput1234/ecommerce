export default function Cart({cart, setCart}){

    //remove functionality

    const removeItem = (id) => {

    const updatedCart = cart.filter((item) => item._id !== id);

    setCart(updatedCart);

    alert("Product Removed Successfully");
};


    return(<>

    <div className="max-w-7xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">
        <span className="text-gray-700 font-bold capitalize "> Shopping </span> 
         <span className="text-red-600 font-bold capitalize "> Cart </span></h2>

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

                           <button
    onClick={() => removeItem(item._id)}
    className="bg-red-500 text-white px-5 py-2 rounded-lg mt-4 hover:bg-red-600 cursor-pointer"
>
    Remove
</button>
           

                        </div>

                </div>
            ))
        )
    }

    </div>
    
    
    </>)
}