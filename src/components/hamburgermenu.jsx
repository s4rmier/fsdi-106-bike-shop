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
          <Link onClick={props.toggleElementVisibility} to="/">
            <li>Home</li>
          </Link>
          <Link onClick={props.toggleElementVisibility} to="/catalog">
            <li>Catalog</li>
          </Link>
          <Link onClick={props.toggleElementVisibility} to="/about">
            <li>About</li>
          </Link>
          <Link onClick={props.toggleElementVisibility} to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
