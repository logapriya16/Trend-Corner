import  { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function getPriceDetails(myCart) {
  const { cartItem } = useContext(CartContext);
    const  price = cartItem.reduce((acc,curr) => acc + (curr.price * curr.qty),0)
    const discount = cartItem.reduce((acc,curr) => acc+(((curr.price- curr.discount_price))*curr.qty),0)
    const deliveryCharge=price >1000?0:100
    
    const TotalAmt=price -discount  +deliveryCharge
  return {price,discount,deliveryCharge,TotalAmt}
  
  
}

export { getPriceDetails };
