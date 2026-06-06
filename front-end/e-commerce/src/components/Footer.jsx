import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import {Link} from "react-router-dom"
export default function Footer(){
    return(<>

    <div className="bg-gray-800 text-white py-4 ">
    <div className="max-w-7xl mx-auto px-2 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
    
   <div>
          <h2 className="text-2xl font-bold">ShopEasy</h2>
          <p className="mt-2 text-gray-300">
            Premium quality products with secure payments and fast delivery.
          </p>
        </div>

    {/* Quick Links */}
        <div className="mx-4">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 cursor-pointer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

<div>
  <h2 className="text-xl font-semibold mb-4">
    Contact Us
  </h2>

  <div className="space-y-3">
    <div className="flex   gap-2">
      <MdEmail />
      <p>support@shopeasy.com</p>
    </div>

    <div className="flex items-center  gap-2">
      <MdPhone />
      <p>+91 9876543210</p>
    </div>

    <div className="flex items-center  gap-2">
      <MdLocationOn />
      <p>India</p>
    </div>
  </div>
</div>
</div>


 <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        © 2026 ShopEasy. All Rights Reserved.
      </div>

      </div>


  


    
    
    
    </>)
}