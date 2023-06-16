import { useContext, useState } from "react";

import { CartContext } from "../Contexts/CartContext";

function getPriceDetails() {
  const [deliveryCharge, SetdeliveryCharge] = useState(0);
  const {cartItem}=useContext(CartContext) 
  //console.log(cartItem)
  const price = cartItem.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const discount = cartItem.reduce(
    (acc, curr) => acc + (curr.price - curr.discount_price) * curr.qty,
    0
  );
  if (price > 0) {
    price > 3000 ? SetdeliveryCharge(0) : SetdeliveryCharge(100);
  }
  const TotalAmt = price - discount + deliveryCharge;
  console.log(cartItem)
  console.log("price details")
  return { price, discount, deliveryCharge, TotalAmt };
}

export { getPriceDetails };
