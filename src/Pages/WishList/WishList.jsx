import React, { useContext, useEffect } from "react";
import { WishListContext } from "../../Contexts/WishListContext";
import "./WishList.css";
import { Navbar } from "../Navbar/Navbar";
import { CartContext } from "../../Contexts/CartContext";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router";
function WishListFunction() {
  //const navigate = useNavigate();
  const { cartItem, AddToCart, GetCartItems, ChangeQuantity } = useContext(
    CartContext
  );
  const { getWishlist, wishList, AddToWishList } = useContext(WishListContext);
  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div className="wishlist-container">
      <Navbar />
      <h1 style={{textAlign:"center"}}>{wishList.length <1?"Your Wishlist is empty":"My wishlist"}</h1>
      <ul>
        {wishList.map((item) => {
          const IsCartItem = cartItem.find(
            (Cart_item) => Cart_item._id === item._id
          );
          return (
            <div className="wishlist-product-container">
              <li className="wishlist-contents">
                <div className="wishlist-product-image">
                  <img
                    className="wishlist-product-image"
                    src={item.image}
                    alt="product-img"
                  />
                </div>
                <div className="wishlist-product-details">
                  <div className="wishlist-product-name">{item.name}</div>
                  <div className="wishlist-product-stock">
                    <p>{item.instock ? "instock" : "out of stock"}</p>
                  </div>
                  <div className="wishlist-product-occation">
                    {item.occation}
                  </div>
                  <div className="wishlist-product-size">
                    <p>Size : {item.size}</p>
                  </div>
                  <div className="wishlist-product-price">
                    <p className="wishlist-product-discount-price">
                      {" "}
                      ₹{item.price - item.price * (item.discount / 100)}
                    </p>
                    <p className="wishlist-product-original-price">
                      {" "}
                      ₹{item.price}
                    </p>
                    <p className="wishlist-product-dis-percentage">
                      {item.discount}%off
                    </p>
                  </div>
                </div>
              </li>
              <hr />
              <div className="wishlist-button">
                <span>
                  {IsCartItem ? (
                    <button
                      className="wishlist-primary-button"
                      onClick={() => {ChangeQuantity(item._id, "increment");
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
                      Increase Quantity
                    </button>
                  ) : (
                    <button
                      className="wishlist-primary-button"
                      onClick={() => {
                        AddToCart(item);
                        GetCartItems();
                        toast.success("Item Added To Cart", {
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
                      Add To Cart
                    </button>
                  )}
                </span>

                <button
                  className="wishlist-primary-button"
                  onClick={() => {AddToWishList(item, false);
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
                  Remove Form WishList
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default WishListFunction;
