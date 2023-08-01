import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Catalog from "./pages/catalog";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Catalog />
      <Footer />
    </div>
  );
}
