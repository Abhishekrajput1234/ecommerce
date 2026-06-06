import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
export default function Header(){
    const[open,setOpen]=useState(false)
    return(<>
    
  <div className=" top-0 left-0 w-full   fixed z-50 bg-transparent">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
<h3 className="text-gray-800 font-bold capitalize text-2xl">ShopEasy</h3>
<ul className=" md:flex hidden   gap-8 items-center capitalize text-gray-700 font-bold  cursor-pointer">
<li><Link to="/">home</Link></li>
<li><Link to="/">Products</Link></li>
<li><Link to="/cart">cart</Link></li>
<li ><Link to="/register"><AccountCircleIcon fontSize="medium"/></Link></li>

</ul>


<div className="md:hidden text-xl cursor-pointer  " onClick={()=>setOpen(!open)} >
<MenuIcon/>
</div>
</div>
{
    open &&(

  <div className="mb-4 border-t border-gray-300">
<ul className="  md:hidden flex flex-col text-center p-3 gap-2 items-center font-bold  capitalize ">
<li><Link to="/">home</Link></li>
<li><Link to="/">Products</Link></li>
<li><Link to="/cart">cart</Link></li>
<li className="bg-blue-400 text-white capitalize px-4 py-1 rounded-lg "><Link to="/register">
<AccountCircleIcon/>
</Link></li>

</ul>


</div>
    
    
    
   ) }

  </div>
    
    </>)
}