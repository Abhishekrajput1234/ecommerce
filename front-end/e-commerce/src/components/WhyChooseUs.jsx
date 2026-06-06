import { FaShippingFast, FaLock, FaUndoAlt, FaStar } from "react-icons/fa";

export default function WhyChooseUs(){

    const features = [
         {
      icon: <FaShippingFast size={40} />,
      title: "Free Shipping",
      description: "Fast and reliable delivery on all orders."
    },
    {
      icon: <FaLock size={40} />,
      title: "Secure Payment",
      description: "Safe and secure payment methods."
    },
    {
      icon: <FaUndoAlt size={40} />,
      title: "Easy Returns",
      description: "Hassle-free returns within 7 days."
    },
    {
      icon: <FaStar size={40} />,
      title: "Premium Quality",
      description: "High-quality products at great prices."
    }
    ]


    return(<>

    

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-8">

        <h2 className="text-3xl font-bold text-gray-700 text-center col-span-full mt-3 ">Why Choose Us</h2>
    {
        features.map((item,title)=>(
            <div key={title} className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300">
            
               <div className="flex justify-center text-blue-500">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>

            </div>
        ))
    }

    </div>
    
    
    </>)
}