import Header from "../components/Header"
import Hero from "../components/Hero"
import Product from "../components/Product"
import FeatureProducts from "../components/FeatureProduct"
import WhyChooseUs from "../components/WhyChooseUs"
import Footer from "../components/Footer"






import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default function Home({setBuyproduct, setCart, cart}){
    return(<>

    <Header cart={cart}/>
    <Hero/>
   <FeatureProducts setBuyproduct={setBuyproduct}
   setCart={setCart}
    cart={cart} />
    <Product 
    setBuyproduct={setBuyproduct}
    setCart={setCart}
    cart={cart}
    
    />
    

    <WhyChooseUs/>
    <Footer/>
    
    
   
  
    
    </>)
}

