import React, { useContext, useEffect } from "react";
import "./ProductListing.css";
//import { FilterComponent } from "../FilterComponent/FilterComponent";
import { useNavigate } from "react-router";
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishListContext";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FilterContext } from "../../Contexts/FiltersContext";
import { toast } from "react-toastify";
import { FilterComponent } from "../../Components/FilterComponent/FilterComponent";
function ProductListing() {
  const { AddToCart, getData, cartItem, GetCartItems } = useContext(
    CartContext
  );
  const { PriceSort } = useContext(FilterContext);
  const { AddToWishList, wishList } = useContext(WishListContext);
  const navigate = useNavigate();
  useEffect(() => {
  getData();
  
  }, []);
  return (
    <div className="products-container">
      <div>
        <FilterComponent/>
      </div>
      <ul type="none" className="product">
        {PriceSort.map((item) => {
          const IsWishListed = wishList.find(
            (wishListItem) => wishListItem._id === item._id
          );
          const IsCartItem = cartItem.find(
            (Cart_item) => Cart_item._id === item._id
          );
          return (
            <div className="product-container">
              <li key={item._id}>
                <div className="product-image-wislist-wrapper">
                  <img
                    className="product-image"
                    src={item.image}
                    alt="product-img"
                    onClick={() => navigate(`/products/${item._id}`)}
                  />
                  <div>
                    {IsWishListed ? (
                      <AiTwotoneHeart
                        onClick={() => {
                          AddToWishList(item, false);
                          
                        }}
                        className=" product-liked-button"
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={() => {
                          localStorage.getItem("encodedToken")
                            ? AddToWishList(item, true)
                            : navigate("/login", {
                                state: { from: "/products" },
                              });
                          
                        }}
                        className="product-like-button"
                      />
                    )}
                  </div>
                </div>
                <div className="product-name-rating">
                  <div className="product-name">{item.name}</div>
                  <div className="product-rating">
                    <p>
                      {item.rating} <span></span>
                    </p>
                    <i className="product-star"></i>
                  </div>
                </div>
                <div className="product-occation">{item.occation}</div>
                <div className="product-price">
                  <p className="product-discount-price">
                    {" "}
                    ₹{item.discount_price}
                  </p>
                  <p className="product-original-price"> ₹{item.price}</p>
                  {/* <p className="product-dis-percentage">{item.discount}%off</p> */}
                </div>
                <div>
                  <span >
                    {IsCartItem ? (
                      <button
                        className="product-primary-button"
                        onClick={() => navigate("/cart")}
                      >
                        <BsCart3 /> Go To Cart
                      </button>
                    ) : (
                      <button
                        className="product-primary-button"
                        onClick={() => {
                          localStorage.getItem("encodedToken")
                            ? AddToCart(item)
                            : navigate("/login", {
                                state: { from: "/products" },
                              });
                        }}
                      >
                        {" "}
                        <BsCart3 />
                        Add To Cart
                      </button>
                    )}
                  </span>
                  <br />
                  <br />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default ProductListing;
