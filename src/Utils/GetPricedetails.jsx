import { useContext, useState } from "react";

import { CartContext } from "../Contexts/CartContext";

function getPriceDetails() {
  const { cartItem } = useContext(CartContext);
  //console.log(cartItem)
  
 
}

export { getPriceDetails };
