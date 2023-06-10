import React, { useContext } from "react";
import "./OrderSummary.css";
import { CartContext } from "../../Contexts/CartContext";
import { getPriceDetails } from "../../Utils/GetPricedetails";
import "./OrderSummary.css";


export const OrderSummary = () => {
  const {
    TotalAmt,
  } = getPriceDetails();
  const { cartItem } = useContext(CartContext);
  return (
    <div className="Order-container">
        <h1 className="order-title">Hurray Order Placed SuccessFully ! </h1>
        <h3 style={{textAlign:"center"}}>Items that you have Ordered</h3>
        <h3 style={{textAlign:"center"}}>
                Order Amount : {TotalAmt}
              </h3>
        
      <div className="ordered-items" >
        {cartItem.map((item) => (
          <div className="order-items">
            <div className="product-img"> <img className="product-img" src={item.image} alt="pro-img" /> </div>
              <div className="product-name">{item.name}</div>
            <div className="product-occation">{item.occation}</div>
            <div className="product-price">
              <p className="product-discount-price">
                {" "}
                ₹{(item.discount_price)}
              </p>
              <p className="product-original-price"> ₹{item.price}</p>
            </div>
            <div>
              <p>Size : {item.size}</p>
            </div>

            <br />
            <br />
            
          </div>
        ))}
      </div>
    </div>
  );
};
