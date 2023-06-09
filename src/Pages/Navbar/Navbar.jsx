import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"
import {BsCartFill} from "react-icons/bs"
import {GiLargeDress} from "react-icons/gi"
import {AiTwotoneHeart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {AiOutlineHome} from "react-icons/ai"
import { FilterContext } from "../../Contexts/FiltersContext";
//{wishList.length>0?wishList.length:"0"}
//{cartItem.length>0?cartItem.length:"0"}

export function Navbar() {
  const navigate=useNavigate()
  const {HandleSearch}=useContext(FilterContext)
  return <nav className="Navigation-Container">
    <div className="nav-brand" onClick={()=>navigate("/")}>Trend Corner</div>
    <div>
      <input className="nav-search" placeholder="search for product" type="search" 
      onChange={(e)=>HandleSearch(e.target.value)}/>
    </div>
    <div className="nav-links">
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="Link" to="/" ><AiOutlineHome/></Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/products"><GiLargeDress/></Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/wishlist"><AiTwotoneHeart/></Link>
          
        </li>
        <li className="nav-item">
          <Link className="Link" to="/cart"><BsCartFill/></Link>
          
        </li>
        <li className="nav-item">
          <Link className="Link" to="/login"><CgProfile/></Link>
        </li>
      </ul>
    </div>
  </nav>
}