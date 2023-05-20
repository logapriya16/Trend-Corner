import "./App.css";
import  Home  from "./Pages/Home/Home";
import  ProductDetails  from "./Pages/Products/ProductDetails";
import Mockman from "mockman-js"
import logo from "./logo.png";
import {Link} from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import ProductListing from "./Pages/ProductDetails/ProductListing";
import WishList from "./Pages/WishList/WishList";
function App() {
  return (
   
<div className="App">   
<nav className="Navigation-Container">
      
    <ul className="nav-items">
    <div className="nav-brand">Naatyalaya</div>
    <div><input  className="nav-search" placeholder="search for product" type="search"/></div>
      <li className="nav-item">
        <Link className="Link" to="/" >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="Link" to="/products">Products</Link>
      </li>  
      <li className="nav-item">
        <Link className="Link" to="/wishlist">WishList</Link>
      </li>
    </ul>         
</nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<ProductListing/>}/>
  <Route path="/wishlist" element={<WishList/>}/>
  <Route path="/products/:productID" element={<ProductDetails/>}/>
  <Route path="/mockman" element={<Mockman/>}/>
</Routes>
</div>
 );
}
export default App;
