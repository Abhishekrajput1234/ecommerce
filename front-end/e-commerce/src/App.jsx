import { useState, useEffect } from "react";
import Header from "./components/Header"

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"

import Buynow from "./pages/Buynow"
import Cart from "./pages/Cart"
import CheckoutPage from "./pages/CheckoutPage"
import Payment from "./pages/Payment"
import OrderSuccess from "./pages/OrderSuccess"
import Deal from "./pages/Deal"


import{BrowserRouter,Routes,Route} from "react-router-dom"

export default function App(){

  const[buyproduct,setBuyproduct]=useState({})
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}, [cart]);







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
    <Route path="/buynow" element={<Buynow buyproduct={buyproduct} cart={cart} setCart={setCart}/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/header" element={<Header/>}/>
    <Route path="/cart" element={< Cart cart={cart} setCart={setCart}/>} />
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/ordersuccess" element={<OrderSuccess/>}/>
    <Route path="/deal" element={<Deal/>}/>
  </Routes>
  
  </BrowserRouter>
  
  </>)
}