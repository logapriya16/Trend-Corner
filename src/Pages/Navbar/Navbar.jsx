import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { CartContext } from "../../Contexts/CartContext";
import { WishListContext } from "../../Contexts/WishListContext";
import {FaShoppingCart} from "react-icons/fa"
import {GiLargeDress} from "react-icons/gi"
import {BsHeartFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {IoHomeSharp} from "react-icons/io5"
export function Navbar() {
  const {cartItem}=useContext(CartContext)
  const {wishList}=useContext(WishListContext)
  //const {wishList}=useContext(WishListContext)
  return <nav className="Navigation-Container">
    <div className="nav-brand">Trend Corner</div>
    <div>
      <input className="nav-search" placeholder="search for product" type="search" />
    </div>
    <div className="nav-links">
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="Link" to="/" ><IoHomeSharp/></Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/products"><GiLargeDress/></Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/wishlist"><BsHeartFill/>{wishList.length}</Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/cart"><FaShoppingCart/>{cartItem.length}</Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/login"><CgProfile/></Link>
        </li>
      </ul>
    </div>
  </nav>
}