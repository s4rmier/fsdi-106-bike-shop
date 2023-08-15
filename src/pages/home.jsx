import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main id="home">
      <h1>Welcome to Urban Bikes Co</h1>
      <Link to="/catalog">
        <button className="button">Catalog</button>
      </Link>
    </main>
  );
}
