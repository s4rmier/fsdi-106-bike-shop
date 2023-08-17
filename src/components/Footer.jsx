import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container flex-row justify-sb">
        <div className="footer-brand flex-col align justify">
          <img src="/images/logo.svg" alt="" />
          <h1>Urban Bikes Co</h1>
        </div>
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
        <div className="footer-subscribe flex-col">
          <h2>Subscribe</h2>
          <p>Subscribe for latest news, events, and promotions!</p>
          <div className="flex-row">
            <input type="text" placeholder="Enter your e-mail" />
            <button className="button">Submit</button>
          </div>
          <ul className="footer-social align flex-row">
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
        </div>
      </div>
    </footer>
  );
}
