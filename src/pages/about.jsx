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
    </main>
  );
}
