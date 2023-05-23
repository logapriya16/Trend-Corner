import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import "./NavBar.css"
export function Navbar() {
  return <nav className="Navigation-Container">
    <div className="nav-brand">Trend Corner</div>
    <div>
      <input className="nav-search" placeholder="search for product" type="search" />
    </div>
    <div className="nav-links">
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="Link" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/wishlist">WishList</Link></li>
        <li className="nav-item">
          <Link className="Link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
}