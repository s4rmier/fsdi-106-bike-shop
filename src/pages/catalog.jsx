import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
  }, []);

  return (
    <main className="catalog">
      <div className="catalog-container flex-row">
        <div className="product-list flex-row justify">
          {products.map((p) => (
            <Product key={p._id} data={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
