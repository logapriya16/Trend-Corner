import React, { useContext} from "react";
import "./CartPriceCard.css"
import { getPriceDetails } from "../../Utils/GetPricedetails";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router";
import { Cart } from "../../Pages/Cart/Cart";
import { toast } from "react-toastify";
function CartPriceCard() {
  const {
    price,
    discount,
    deliveryCharge,
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

        <hr />
        <div className="cart-tot-amt">
          <p>TOTAL AMOUNT</p>
          <p>{TotalAmt}</p>
        </div>

        <hr />
        <p style={{ textAlign: "center" }}>
          You will save { discount} on this order
        </p>

        <br />
        <button className="primary-button" onClick={()=>{ price>0?navigate("/address")  
      :toast.warning(" Add items to the cart ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }} > Checkout</button>
      </div>
    </div>
  );
}
export { CartPriceCard };