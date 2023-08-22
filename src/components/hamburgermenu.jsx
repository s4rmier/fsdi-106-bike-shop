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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/catalog">
            <li>Catalog</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
