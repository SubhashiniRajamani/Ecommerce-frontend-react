
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prodetail from "./pages/productDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/cart"
import Vission from "./components/vission";




function App() {

  const [cartiterms,setcartiterms] =  useState([]);

   
  return (
    <div className="App">
   
 
      <Router>
         
     <div>
        <ToastContainer theme="dark" position= "bottom-center"/>
      <Header cartiterms={cartiterms} />
       <Routes>

        <Route path="/" element ={  <Home />} />
        <Route path="/search" element = {  <Home />} />
        <Route path="/products/:id" element = {  <Prodetail cartiterms= {cartiterms} setcartiterms={setcartiterms} />} />
        <Route path ="/mycarts"   element ={ <Cart   cartiterms = {cartiterms} setcartiterms = {setcartiterms}  /> }  />

        <Route  path="/vission" element = {<Vission/>}  />

        </Routes>

     </div>
 <Footer/>
      </Router>
    
     
     
      
    

    </div>
  );
}

export default App;
