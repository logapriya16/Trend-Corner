import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { CartContext } from "../../Contexts/CartContext";
import "./ProductsDetails.css";

import { WishListContext } from "../../Contexts/WishListContext";
import { BsCart3 } from "react-icons/bs";

export default function ProductsDetails() {
  const { getData, data, AddToCart, cartItem, GetCartItems } = useContext(
    CartContext
  );
  const { wishList, AddToWishList } = useContext(WishListContext);
  const { productID } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="products-details-container">
      <ul type="none" className="product-details-individual">
        {data
          .filter((item) => item._id === productID)
          .map((item) => {
            const IsWishListed = wishList.find(
              (wishListItem) => wishListItem._id === item._id
            );
            const IsCartItem = cartItem.find(
              (Cart_item) => Cart_item._id === item._id
            );

            return (
              <div className="product-details-container">
                <li className="product-details-each">
                  <img
                    className="product-details-image"
                    src={item.image}
                    alt="product-img"
                  />
                  <div className="product-details-info">
                    <div className="product-details-name-rating">
                      <div className="product-details-name">{item.name}</div>
                      <div className="product-details-rating">
                        <p>{item.rating}</p>
                        <i className="product-details-star"></i>
                      </div>
                    </div>
                    <div className="product-details-occation">
                      {item.occation}
                    </div>
                    <div className="product-price">
                      <p className="product-discount-price">
                        {" "}
                        ₹{item.discount_price}
                      </p>
                      <p className="product-original-price"> ₹{item.price}</p>
                      {/* <p className="product-dis-percentage">{item.discount}%off</p> */}
                    </div>
                    <div className="product-details-buttons">
                      <span>
                        {IsCartItem ? (
                          <button className="product-details-primary-button"onClick={() => navigate("/cart")} >
                            <BsCart3  /> Go To
                            Cart
                          </button>
                        ) : (
                          <button
                            className="product-details-primary-button"
                            onClick={() => {
                                localStorage.getItem("encodedToken")
                                  ? AddToCart(item)
                                  : navigate("/login", {
                                      state: { from: "/products" },
                                    });
                              }}
                          >
                            {" "}
                            <BsCart3
                              
                            />
                            Add To Cart
                          </button>
                        )}
                      </span>
                      <br />
                      <br />
                      <span>
                        {IsWishListed ? (
                          <button
                            className="product-details-primary-button"
                            onClick={() => AddToWishList(item, false)}
                          >
                            Remove Form Wishlist
                          </button>
                        ) : (
                          <button
                            onClick={() => localStorage.getItem("encodedToken")
                            ? AddToWishList(item, true)
                            : navigate("/login", {
                                state: { from: "/products" },
                              })}
                            className="product-details-primary-button"
                          >
                            Add To WishList
                          </button>
                        )}
                      </span>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
