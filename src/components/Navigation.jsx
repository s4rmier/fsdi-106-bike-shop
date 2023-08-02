export default function Navigation() {
  return (
    <nav>
      <div className="nav--container flex-row justify-sb">
        <div className="nav-brand flex-row align">
          <img src="/images/logo.svg" alt="" />
          <h1>Urban Bikes Co</h1>
        </div>
        <ul className="nav-links align justify flex-row">
          <li>Home</li>
          <li className="active">Catalog</li>
          <li>Events</li>
          <li>About</li>
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
        <div className="flex-row">
          <i id="cart" className="fa-solid fa-cart-shopping flex-row align"></i>
          <i id="burger-menu" className="fa-solid fa-bars flex-row align"></i>
        </div>
      </div>
    </nav>
  );
}
