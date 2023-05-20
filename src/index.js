import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider,CartContext } from "./Contexts/CartContext";

// Call make Server
makeServer();
export {CartContext}
ReactDOM.render(
  <BrowserRouter>
  <CartProvider>
  <Routes>  
    
      <Route path="*" element={<App/>}/>
      
      </Routes>
      </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
  
  );