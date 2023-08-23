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
    </main>
  );
}
