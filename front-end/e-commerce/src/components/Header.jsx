import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
export default function Header(){
    const[open,setOpen]=useState(false)
    return(<>
    
  <div className=" top-0 left-0 w-full  bg-gray-50 shadow-sm  z-50 ">
    <div className="max-w-7xl mx-auto flex items-center py-4 px-6">

    {/* Left */}
    <div className="flex-1">
        <h3 className="text-gray-800 font-bold text-2xl">
            🛒 ShopEasy
        </h3>
    </div>

    {/* Center */}
    <ul className="hidden md:flex flex-1 justify-center gap-10 font-semibold text-gray-700 capitalize">
        <li>
            <Link to="/" className="hover:text-blue-600">
                Home
            </Link>
        </li>

        <li>
            <Link to="/cart" className="hover:text-blue-600">
                Cart
            </Link>
        </li>
    </ul>

    {/* Right */}
    <div className="hidden md:flex flex-1 justify-end items-center gap-6">
        <Link to="/wishlist" className="hover:text-red-500">
            <FavoriteBorderIcon />
        </Link>

        <Link to="/register" className="hover:text-blue-600">
            <AccountCircleIcon />
        </Link>
    </div>


<div className="md:hidden text-xl cursor-pointer  " onClick={()=>setOpen(!open)} >
<MenuIcon/>
</div>
</div>
{
    open &&(

  <div className="mb-1  border-t border-gray-300">
<ul className="  md:hidden flex flex-col text-center p-3 gap-2 items-center font-bold  capitalize ">
<li><Link to="/">home</Link></li>

<li><Link to="/cart">cart</Link></li>
<li><Link to="/wishlist"><FavoriteBorderIcon fontSize="medium" /></Link></li>
<li><Link to="/register">
<AccountCircleIcon fontSize="medium" />
</Link></li>

</ul>


</div>
    
    
    
   ) }

  </div>
    
    </>)
}