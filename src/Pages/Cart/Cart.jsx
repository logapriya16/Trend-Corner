import React, { useState } from "react"
import { useContext, useEffect } from "react"
import { CartContext } from "../../Contexts/CartContext"
import "./Cart.css"
import { BsCart3 } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { WishListContext } from "../../Contexts/WishListContext"
export function Cart() {
    const navigate = useNavigate()
    const { GetCartItems, ChangeQuantity, cartItem, DeleteFromCart, TotalPrice } = useContext(CartContext)
    const { AddToWishList,wishList } = useContext(WishListContext)
    useEffect(() => { GetCartItems() }, [])
    return <div >
        <h1>Cart Page</h1>
        <ul className="cart-container" type="none">
            {cartItem.map((item) => {
                const IsWishListed = wishList.find((wishListItem) => wishListItem._id === item._id)
                return <div className="cart-product-container">
                    <li className="cart-contents">
                        <div className="cart-product-image">
                            <img className="cart-product-image" src={item.image} alt="product-img" />
                        </div>
                        <div className="cart-product-details">
                            <div className="cart-product-name">
                                {item.name}
                            </div>
                            <div className="cart-product-stock">
                                <p>{item.instock ? "instock" : "out of stock"}</p>
                            </div>
                            <div className="cart-product-occation">
                                {item.occation}
                            </div>
                            <div className="cart-product-size">
                                <p>Size : {item.size}</p>
                            </div>
                            <div className="cart-product-price">
                                <p className="cart-product-discount-price"> ₹{item.price - (item.price * (item.discount / 100))}</p>
                                <p className="cart-product-original-price"> ₹{item.price}</p>
                                <p className="cart-product-dis-percentage">{item.discount}%off</p>
                            </div>
                            <div className="cart-product-quantity">
                                <button onClick={() => ChangeQuantity(item._id, "increment")}>+</button>
                                <p>{item.qty}</p>
                                <button onClick={() => ChangeQuantity(item._id, "decrement")} disabled={item.qty > 1 ? false : true}>-</button>
                            </div>
                        </div>
                    </li>
                    <hr />
                    <div className="cart-button">
                        
                        <div>
                            {IsWishListed ?
                                <button className="cart-primary-button"
                                    onClick={() => AddToWishList(item, false)}>
                                    Remove from Wishlist
                                </button>:
                                <button className="cart-primary-button"
                                onClick={() => AddToWishList(item, true)}>
                                Move To Wishlist
                            </button> 
                            }
                        </div>
                        <button className="cart-primary-button"
                            onClick={() => DeleteFromCart(item._id)}>
                            Remove Form Cart
                        </button>
                    </div>
                </div>
            })}
        </ul>
        <div className="CheckOut-Container">
            <div className="coupon-container">
                Have A Coupon?
                <button className="cart-primary-button">
                    Apply
                </button>
                <div>
                    <hr /><h3>PRICE DETAILS</h3><hr />
                    <p>Price({cartItem.length}items){TotalPrice}<br />
                        <p></p> Discount {cartItem.map((item) =>
                            item.price * (item.discount / 100))}<br />
                        Delivery Charges FREE<br />
                        Coupon Discount { }
                        <hr />
                        TOTAL AMOUNT {TotalPrice}
                        <hr />
                        You will save { } on this order
                        <br />
                        <button className="primary-button"> Checkout</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
}