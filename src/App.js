import "./App.css";
import  Home  from "./Pages/Home/Home";
import  ProductDetails  from "./Pages/ProductDetail/ProductDetails";
import React from "react";
//import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./Pages/ProductListing/ProductListing";
import { Cart } from "./Pages/Cart/Cart";
//import { CartContext } from "./Contexts/CartContext";
import {RequirsAuth} from "./Components/RequirsAuth"
import { SignUp } from "./Pages/SignUpPage/SignUp";
import { Login } from "./Pages/LoginPage/Login";
import { Navbar } from "./Pages/Navbar/Navbar";
import { MockmanProvider } from "./Pages/MockMan/MockMan";
import WishListFunction from "./Pages/WishList/WishList";

function App() {

  return (
   
<div className="App">   
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<ProductListing/>}/>
  <Route path="/wishlist" element={<RequirsAuth>
    <WishListFunction/> </RequirsAuth>}/>
  <Route path="/products/:productID" element={<ProductDetails/>}/>
  <Route path="/mockman" element={<MockmanProvider/>}/>
  <Route path="/cart" element={<RequirsAuth> <Cart/></RequirsAuth>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
</Routes>
</div>
 );
}
export default App;