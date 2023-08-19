import { Link } from "react-router-dom";
import "./navigation.css";
import HamburgerMenu from "./hamburgermenu";
import { useContext } from "react";
import DataContext from "../store/dataContext";

export default function Navigation() {
  const cartQty = useContext(DataContext).cart;
  return (
    <nav>
      <div className="nav--container flex-row justify-sb">
        <Link to="/">
          <div className="nav-brand flex-row align">
            <img src="/images/logo.svg" alt="" />
            <h1>Urban Bikes Co</h1>
          </div>
        </Link>
        <ul className="nav-links align justify flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="nav-social align flex-row">
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-yelp"></i>
          </li>
          <li>
            <i className="fa-brands fa-pinterest-p"></i>
          </li>
        </ul>
        <div className="cart-container flex-row align justify">
          <Link to="/cart">
            <i
              id="cart-icon"
              className="fa-solid fa-cart-shopping flex-row align"
            >
              {" "}
              <span
                style={{ display: cartQty.length ? "inherit" : "none" }}
                className="cart-quantity"
              >
                {cartQty.length}
              </span>
            </i>
          </Link>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
