import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main id="home" className="flex-col align">
      <section className="hero-section flex-col align justify">
        <div className="tagline flex-col align">
          <h1>IS IT JUST YOU AND THE OPEN ROAD?</h1>
          <h2>Elevate your journey and Find the perfect ride</h2>
        </div>

        <Link to="/catalog">
          <button className="button">Browse Collections</button>
        </Link>
      </section>

      <img className="brands-strip" src={"/images/brands.svg"} alt="" />
      <div className="mobile-brands"></div>

      <figure className="bike-showcase flex-row justify">
        <img src="/images/bike1.jpg" alt="" />
        <figcaption className="flex-col">
          <div className="col-price-star flex-row justify-sb">
            <h4>$11499</h4>
            <i className="fa-solid fa-star">4.8</i>
          </div>
          <h2>Trek Top Fuel 9X9 XX1 AXS</h2>
          <div>
            <p>
              <span>FRAME</span>: Carbon CC
            </p>
            <p>
              <span>FORK</span>: RockShox SID Ultimate, DebonAir spring
            </p>
            <p>
              <span>REAR SHOCK</span>: RockShox Deluxe Ulitmate RCT, 185mm x
              50mm
            </p>
            <p>
              <span>WHEELS</span>: Bontrager Line Pro 30, OCLV Mountain Carbon,
              Tubeless Ready, 6-bolt, Boost110, 15mm thru axle
            </p>
          </div>
          <Link to="/catalog">
            <button className="button">Shop</button>
          </Link>
        </figcaption>
      </figure>

      <section className="about-us flex-col align">
        <h2>About Us</h2>
        <div className="flex-row">
          <figure className="about-cards flex-col justify">
            <img src="/images/quality.jpg" alt="" />
            <figcaption>
              <h3>Quality</h3>
              <p>Premium grade parts & accessories</p>
              <p>Top brands</p>
              <p>Safe & reliable</p>
            </figcaption>
          </figure>
          <figure className="about-cards flex-col justify">
            <img src="/images/expertise.jpg" alt="" />
            <figcaption>
              <h3>Expertise</h3>
              <p>Knowledgeable & experienced staff</p>
              <p>Professional consultation</p>
              <p>“Perfect-for-you” recommendations</p>
            </figcaption>
          </figure>
          <figure className="about-cards flex-col justify">
            <img src="/images/community.jpg" alt="" />
            <figcaption>
              <h3>Community</h3>
              <p>Tight-knit group</p>
              <p>Supportive company for all levels</p>
              <p>Connected & like-minded</p>
            </figcaption>
          </figure>
        </div>
        <Link to="/about">
          <button className="button">About Us</button>
        </Link>
      </section>

      <section className="theclub container flex-col justify">
        <div className="clublogo flex-row justify">
          <img src="/images/theclubhero.png" alt="" />
        </div>
        <h2>
          Join our Club membership for mountain bikers and enjoy free
          maintenance, exclusive training seminars, and unlimited weekend rides.
          Improve your skills and connect with a supportive community. Upgrade
          your biking experience today!
        </h2>
        <div className="club-benefits flex-row align justify">
          <figure className="flex-col align">
            <i className="fa-solid fa-map-location-dot"></i>
            <figcaption>
              <h3>Unlimted access to weekend group rides</h3>
            </figcaption>
          </figure>
          <figure className="flex-col align">
            <i className="fa-solid fa-person-chalkboard"></i>
            <figcaption>
              <h3>Exclusive training and educational seminars</h3>
            </figcaption>
          </figure>
          <figure className="flex-col align">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <figcaption>
              <h3>Free quarterly tune-up and maintenance</h3>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
