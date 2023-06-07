import React, { useContext } from "react";
import "./OrderSummary.css";
import { useNavigate } from "react-router";
import { CartContext } from "../../Contexts/CartContext";
import { getPriceDetails } from "../../Utils/GetPricedetails";
import "./OrderSummary.css";
import { Address } from "../../Pages/Address/Address";


export const OrderSummary = () => {
  const {
    price,
    discount,
    deliveryCharge,
    CuponDiscount,
    TotalAmt,
  } = getPriceDetails();
  const { cartItem } = useContext(CartContext);
  const { currAddres } = Address();
  const navigate = useNavigate();
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
            
              <div className="product-name">{item.name}</div>
        
            <div className="product-occation">{item.occation}</div>
            <div className="product-price">
              <p className="product-discount-price">
                {" "}
                ₹{item.price - item.price * (item.discount / 100)}
              </p>
              <p className="product-original-price"> ₹{item.price}</p>
              <p className="product-dis-percentage">{item.discount}%off</p>
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
