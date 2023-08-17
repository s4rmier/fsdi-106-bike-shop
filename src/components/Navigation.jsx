import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
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
            <Link to="/admin">Admin</Link>
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
        <div className="flex-row align justify">
          <Link to="/cart">
            <i
              id="cart-icon"
              className="fa-solid fa-cart-shopping flex-row align"
            ></i>
          </Link>
          <i id="burger-menu" className="fa-solid fa-bars flex-row align"></i>
        </div>
      </div>
    </nav>
  );
}
