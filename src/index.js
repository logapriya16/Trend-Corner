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
import { FilterContext,FilterProvider } from "./Contexts/FiltersContext";
import { AddressProvider,AddressContext } from "./Contexts/AddressContext";
// Call make Server
makeServer();
export{AddressContext}
export{AuthContext}
export {CartContext}
export {WishListContext}
export{FilterContext}
ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
  <CartProvider>
  <WishlistProvider>
    <FilterProvider>
      <AddressProvider>
      <Routes>  
      <Route path="*" element={<App/>}/>
      </Routes>
      </AddressProvider>
      </FilterProvider>
  </WishlistProvider>
  </CartProvider>
  </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
  );