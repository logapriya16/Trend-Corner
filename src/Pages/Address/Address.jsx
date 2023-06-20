import React, { useContext, useState } from "react";
import "./Address.css";
//import { CartPriceDetails } from "../../Components/CartPriceDetails";
import { AddressContext } from "../../Contexts/AddressContext";
import { Link } from "react-router-dom";
import { OrderSummary } from "../../Components/OrderSummary/OrderSummary";
import { toast } from "react-toastify";
import { CartPriceCard } from "../../Components/CartPriceCard/CartPriceCard";
import { CartContext } from "../../Contexts/CartContext";

export const Address = () => {
  const { userAddress } = useContext(AddressContext);
  const { DeleteFromCart, cartItem } = useContext(CartContext);
  const [currAddres, setCurrAdress] = useState(userAddress[0]);
  const [order, setOrder] = useState(false);
  const { TotalAmt } = CartPriceCard();
  //console.log(userAddress, "in address page");
  return (
    <div>
      {order === false ? (
        <div>
          <div className="address-container">
            <div className="address-of-user">
              <ul type="none">
                {userAddress.map((add) => (
                  <li>
                    <input
                      type="radio"
                      name="user-add"
                      onChange={(e) => e.target.checked && setCurrAdress(add)}
                    />
                    {add.name}
                    <br />
                    {add.hno},{add.city}
                    {add.state},<br /> {add.pincode} <br /> Phone : {add.phno}
                    <br /> {add.country}{" "}
                  </li>
                ))}
              </ul>
              <Link to="/newaddress">Add New User Address</Link>
            </div>
            <div className="bill-details">
              {/* <CartPriceCard /> */}
            </div>
          </div>
          <div className="Final-address">
            <hr />
            <h5> Are you sure you want to Deliver Products To this Address?</h5>
            {currAddres.name}
            <br />
            {currAddres.hno},{currAddres.city}
            {currAddres.state},<br /> {currAddres.pincode} <br /> Phone :{" "}
            {currAddres.phno}
            <br /> {currAddres.country}
            <br />
            <button
              className="Order-btn"
              onClick={() => {
                cartItem.map((item) => DeleteFromCart(item._Id));

                TotalAmt > 0 ? setOrder(true) : setOrder(false);
                TotalAmt > 0
                  ? toast.success("Order Placed", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    })
                  : toast.warning("Add Atleast One Item to cart", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
              }}
            >
              Place Order
            </button>
            <hr />
          </div>
        </div>
      ) : (
        <div>
          <OrderSummary />
        </div>
      )}
    </div>
  );
};
