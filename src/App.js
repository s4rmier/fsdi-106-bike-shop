import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/about";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Admin from "./pages/admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
