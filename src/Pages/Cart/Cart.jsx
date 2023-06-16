import React from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./Cart.css";
import { WishListContext } from "../../Contexts/WishListContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export function Cart() {
  
  const { GetCartItems, ChangeQuantity, cartItem, DeleteFromCart } = useContext(
    CartContext
  );
  const { AddToWishList, wishList } = useContext(WishListContext);
  const navigate = useNavigate();
  useEffect(() => {
    GetCartItems();
  }, []);
  return (
    <div>
      {cartItem.length < 1 ? (
        <h1 style={{ textAlign: "center", paddingTop: "7rem" }}>
          Your Cart Is Empty
        </h1>
      ) : (
        <div className="cart-page">
          <ul className="cart-container" type="none">
          <button onClick={()=>{navigate('/address')}}>Go to address page</button>
       
            {cartItem.map((item) => {
              const IsWishListed = wishList.find(
                (wishListItem) => wishListItem._id === item._id
              );
              return (
                <div className="cart-product-container">
                  <li className="cart-contents" key={item._id}>
                    <div className="cart-product-image">
                      <img
                        className="cart-product-image"
                        src={item.image}
                        alt="product-img"
                      />
                    </div>
                    <div className="cart-product-details">
                      <div className="cart-product-name">{item.name}</div>
                      <div className="cart-product-occation">
                        {item.occation}
                      </div>
                      <div className="cart-product-size">
                        <p>Size : {item.size}</p>
                      </div>
                      <div className="cart-product-price">
                        <p className="cart-product-discount-price">
                          {" "}
                          ₹{item.discount_price}
                        </p>
                        <p className="cart-product-original-price">
                          {" "}
                          ₹{item.price}
                        </p>
                      </div>
                      <div className="cart-product-quantity">
                        <button
                          className="cart-qty-btn"
                          onClick={() => {
                            ChangeQuantity(item._id, "increment");
                            toast.success("Quanity Increased", {
                              position: "bottom-right",
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
                          +
                        </button>
                        <p className="cart-product-qty">{item.qty}</p>
                        <button
                          className="cart-qty-btn"
                          onClick={() => {
                            ChangeQuantity(item._id, "decrement");
                            toast.warning("Quanity Decresed", {
                              position: "bottom-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            });
                          }}
                          disabled={item.qty > 1 ? false : true}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </li>

                  <hr />
                  <div className="cart-button">
                    <div>
                      {IsWishListed ? (
                        <button
                          className="cart-primary-button"
                          onClick={() => {
                            AddToWishList(item, false);
                            toast.warning("Item Removed From WishList", {
                              position: "bottom-right",
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
                          Remove from Wishlist
                        </button>
                      ) : (
                        <button
                          className="cart-primary-button"
                          onClick={() => {
                            AddToWishList(item, true);
                            toast.success("Item Added To WishList", {
                              position: "bottom-right",
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
                          Add To Wishlist
                        </button>
                      )}
                    </div>
                    <button
                      className="cart-primary-button"
                      onClick={() => {
                        toast.warning("Item Removed From Cart", {
                          position: "bottom-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                        DeleteFromCart(item._id);
                      }}
                    >
                      Remove Form Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
          <div className="CheckOut-Container">

          </div>
        </div>
      )}
    </div>
  );
}
