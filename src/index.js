import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider,CartContext } from "./Contexts/CartContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { AuthContext } from "./Contexts/AuthContext";
import { WishlistProvider ,WishListContext} from "./Contexts/WishListContext";
// Call make Server
makeServer();
export{AuthContext}
export {CartContext}
export {WishListContext}
ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
  <CartProvider>
  <WishlistProvider>
  <Routes>  
      <Route path="*" element={<App/>}/>
      </Routes>
      </WishlistProvider>
      </CartProvider>
      </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
  
  );