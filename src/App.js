import "./App.css";
import  Home  from "./Pages/Home/Home";
import  ProductDetails  from "./Pages/ProductDetail/ProductDetails";
import Mockman from "mockman-js"
//import logo from "./logo.png";
import {Link} from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import ProductListing from "./Pages/ProductListing/ProductListing";
import WishList from "./Pages/WishList/WishList";
import { Cart } from "./Pages/Cart/Cart";
import { useContext} from "react";
import { CartContext } from "./Contexts/CartContext";
import {RequirsAuth} from "./Components/RequirsAuth"
import { SignUp } from "./Pages/SignUpPage/SignUp";
import { Login } from "./Pages/LoginPage/Login";
import { Navbar } from "./Pages/Navbar/Navbar";

function App() {
  const {cart}=useContext(CartContext)

  return (
   
<div className="App">   
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<ProductListing/>}/>
  <Route path="/wishlist" element={<RequirsAuth><WishList/></RequirsAuth>}/>
  <Route path="/products/:productID" element={<ProductDetails/>}/>
  <Route path="/mockman" element={<Mockman/>}/>
  <Route path="/cart" element={<RequirsAuth> <Cart/></RequirsAuth>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
</Routes>
</div>
 );
}
export default App;