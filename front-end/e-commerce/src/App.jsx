import { useState } from "react"
import Header from "./components/Header"

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"

import Buynow from "./pages/Buynow"
import Cart from "./pages/Cart"
import CheckoutPage from "./pages/CheckoutPage"
import Payment from "./pages/Payment"
import OrderSuccess from "./pages/OrderSuccess"


import{BrowserRouter,Routes,Route} from "react-router-dom"

export default function App(){

  const[buyproduct,setBuyproduct]=useState({})
  const [cart,setCart]=useState([])







  return(<>

  <BrowserRouter>
  <Routes>
    <Route path="/"

    element={<Home 
    setBuyproduct={setBuyproduct}
    cart={cart}
    setCart={setCart}
    
    />}
    
    
    />
    <Route path="/buynow" element={<Buynow buyproduct={buyproduct}/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/header" element={<Header/>}/>
    <Route path="/cart" element={< Cart cart={cart}/>} />
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/ordersuccess" element={<OrderSuccess/>}/>
  </Routes>
  
  </BrowserRouter>
  
  </>)
}