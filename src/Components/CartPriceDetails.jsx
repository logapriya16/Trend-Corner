import React, { useContext, useState } from "react";
import "./CartPriceDetails.css"
import { getPriceDetails } from "../Utils/GetPricedetails";
import { CartContext } from "../Contexts/CartContext";
import { useNavigate } from "react-router";
import { Cart } from "../Pages/Cart/Cart";
function CartPriceDetails() {
  const {
    price,
    discount,
    deliveryCharge,
    CuponDiscount,
    TotalAmt,
  } = getPriceDetails();
  const { cartItem } = useContext(CartContext);
  const {coupon}=Cart()
  const navigate = useNavigate()
  return (
    <div style={{padding:"2rem" , textAlign:"center",paddingTop:"0rem"}}>

      <hr />
      <h3 style={{textAlign:"center"}}>PRICE DETAILS</h3>
      <hr />
      <div className="cart-price-details">
        <div className="cart-price">
          <p>Price({cartItem.length}items)</p>
          <p>{price}</p>
        </div>
        <br />
        <div className="cart-discount">
          <p>Discount</p>
          <p>{discount}</p>
        </div>

        <br />
        <div className="cart-delivery-charge">
          <p>Delivery Charges </p>
          <p>
            {price > 0 ? (deliveryCharge < 0 ? "FREE" : deliveryCharge) : 0}
          </p>
        </div>

        <br />
        <div className="cart-coupon">
          <p>Coupon Discount</p>
          <p>{ coupon? 100:0}</p>
        </div>

        <hr />
        <div className="cart-tot-amt">
          <p>TOTAL AMOUNT</p>
          <p>{TotalAmt}</p>
        </div>

        <hr />
        <p style={{ textAlign: "center" }}>
          You will save {CuponDiscount + discount} on this order
        </p>

        <br />
        <button className="primary-button" onClick={()=>{ if(price>0){navigate("/address")}}} > Checkout</button>
      </div>
    </div>
  );
}
export { CartPriceDetails };
