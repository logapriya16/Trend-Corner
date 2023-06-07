import "./App.css";
import  Home  from "./Pages/Home/Home";
import  ProductDetails  from "./Pages/ProductDetail/ProductDetails";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./Pages/ProductListing/ProductListing";
import { Cart } from "./Pages/Cart/Cart";
import {RequirsAuth} from "./Components/RequirsAuth"
import { SignUp } from "./Pages/SignUpPage/SignUp";
import { Login } from "./Pages/LoginPage/Login";
import { Navbar } from "./Pages/Navbar/Navbar";
import { MockmanProvider } from "./Pages/MockMan/MockMan";
import WishListFunction from "./Pages/WishList/WishList";
import { Address } from "./Pages/Address/Address";
import { NewAddress } from "./Pages/NewAddress/NewAddress";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  <Route path="/address" element ={<Address/>}/>
  <Route path="/newaddress" element={<NewAddress/>}/>
</Routes>
<ToastContainer/>
</div>
 );
}
export default App;