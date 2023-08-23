import "./about.css";

export default function About() {
  return (
    <main id="about">
      <section className="about-hero flex-col align justify">
        <div className="tag-container flex-col justify align">
          <h3>About</h3>
          <div className="flex-row justify">
            <img src="/images/logo.svg" alt="" />
            <div>
              <h1>URBAN BIKES CO</h1>
              <p>Pedaling dreams and pioneering urban journeys</p>
            </div>
          </div>
        </div>
      </section>

      <article className="about-article container flex-col align">
        <h2>Mission</h2>
        <p>
          At Urban Bikes Co, our mission is to empower urban riders with
          meticulously crafted bicycles that effortlessly blend innovation,
          style, and sustainability. Through our commitment to redefining city
          commuting, we strive to inspire a healthier, greener, and more
          connected urban lifestyle for all.
        </p>
      </article>

      <section className="about-cards container flex-row align justify">
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
      </section>

      <section className="about-gallery">
        <h2>gallery</h2>
        <div className="image-gallery flex-row align justify">
          <img src="/images/gallery1.jpg" alt="" />
          <img src="/images/gallery2.webp" alt="" />
          <img src="/images/gallery3.jpg" alt="" />
          <img src="/images/gallery4.jpg" alt="" />
        </div>
        <div className="image-gallery flex-row align justify">
          <img src="/images/gallery5.jpg" alt="" />
          <img src="/images/gallery6.jpg" alt="" />
          <img src="/images/gallery7.jpg" alt="" />
          <img src="/images/gallery8.jpg" alt="" />
        </div>
      </section>

      <div className="about-service container flex-col align">
        <figure className="about-service container flex-row justify">
          <img src="/images/repair.jpg" alt="" />
          <figcaption className="flex-col justify">
            <h2>Service done right</h2>
            <p>
              When service repair is done right, it's more than just fixing a
              problem; it's a commitment to delivering quality and reliability,
              and building trust with every interaction.
            </p>
          </figcaption>
        </figure>
        <button className="contact-btn  button">Contact Us</button>
      </div>
    </main>
  );
}
