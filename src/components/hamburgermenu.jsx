import "./hamburgermenu.css";
import { Link } from "react-router-dom";

export default function HamburgerMenu(props) {
  return (
    <div>
      <div className="mobile-nav flex-col">
        <i
          onClick={props.toggleElementVisibility}
          className="close-modal-btn fa-solid fa-square-xmark"
        ></i>
        <figure className="flex-row align justify">
          <img src="/images/logo.svg" alt="" />
          <figcaption>
            <h1>Urban Bikes Co</h1>
          </figcaption>
        </figure>
        <ul className="modal-nav">
          <li>
            <Link onClick={props.toggleElementVisibility} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleElementVisibility} to="/catalog">
              Catalog
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleElementVisibility} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleElementVisibility} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleElementVisibility} to="/admin">
              Admin
            </Link>
          </li>
        </ul>
        <div className="footer-contact flex-col">
          <h2>Contact</h2>
          <ul>
            <li>
              <span>ADD:</span> 2223 Alpine Blvd Alpine, CA, 91901
            </li>
            <li>
              <span>TEL:</span> (619)722-4232
            </li>
            <li>
              <span>E-MAIL:</span> contact@ubco.com
            </li>
            <li>https://ubco.com</li>
          </ul>
        </div>
        <div className="footer-hours">
          <h2>Hours</h2>
          <ul>
            <li>
              <span>Mon - Fri: </span> 9AM-6PM
            </li>
            <li>
              <span>Wednesday: </span> CLOSED
            </li>
            <li>
              <span>Sat: </span> 6AM-4PM
            </li>
            <li>
              <span>Sun: </span> 6AM-2PM
            </li>
            <li>
              <span>Holidays: </span> 8AM - 1PM
            </li>
          </ul>
        </div>
        <div className="subscribe-label">
          <h2>Subscribe</h2>
          <p>Subscribe for latest news, events, and promotions!</p>
        </div>
        <div className="subscribe-form flex-row justify">
          <input type="text" placeholder="Enter your e-mail" />
          <button className="button">Submit</button>
        </div>
      </div>
    </div>
  );
}
