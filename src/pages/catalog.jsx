import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import "./catalog.css";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProd, setFiltered] = useState([]);
  let service = new DataService();

  useEffect(function () {
    loadCatalog();
    loadCategories();
  }, []);

  async function loadCatalog() {
    let prods = await service.getProducts();
    setProducts(prods);
    setFiltered(prods);
  }

  async function loadCategories() {
    let categories = await service.getCategories();
    categories.push("Sale");
    setCategory(categories);
  }

  function filter(itemCategory) {
    let filteredList = [];
    products.forEach((element) => {
      if (element.make === itemCategory) {
        filteredList.push(element);
      } else if (itemCategory === "Sale") {
        if (element.isDiscounted) {
          filteredList.push(element);
        }
      }
    });
    setFiltered(filteredList);
  }

  function resetFilter() {
    setFiltered(products);
  }

  return (
    <main id="catalog" className="catalog">
      <div className="filters flex-row align justify">
        <h3>Filter: </h3>
        <div className="filter-button-set flex-row align justify">
          <button onClick={resetFilter} className="button">
            Reset
          </button>
          {category.map((c) => (
            <button
              key={c}
              onClick={() => filter(c)}
              className="button filter-btn"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-container flex-col">
        <div className="product-list flex-row justify">
          {filteredProd.map((p) => (
            <Product key={p._id} data={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
