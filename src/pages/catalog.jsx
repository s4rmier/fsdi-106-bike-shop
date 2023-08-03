import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProd, setFiltered] = useState([]);

  useEffect(function () {
    let service = new DataService();
    let prods = service.getProducts();
    setProducts(prods);
    setFiltered(prods);
    let categories = ["Trek", "Fuel", "Specialized", "Sale"];
    setCategory(categories);
  }, []);

  function filter(itemCategory) {
    console.log(itemCategory);
    let filteredList = [];
    products.forEach((element) => {
      if (element.make == itemCategory) {
        filteredList.push(element);
      } else if (itemCategory == "Sale") {
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
    <main className="catalog">
      <div className="filters flex-row align justify">
        <h3>Filter: </h3>
        <div className="filter-button-set">
          {" "}
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
