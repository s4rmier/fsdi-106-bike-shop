import { useEffect, useState } from "react";
import "./admin.css";
import DataService from "../services/dataService";

export default function Admin() {
  const [product, setProduct] = useState({
    name: "",
    make: "",
    price: "",
    dcprice: 0,
    image: "",
    isDiscounted: false,
    sizes: "",
    stars: "",
  });

  useEffect(function () {
    loadCatalog();
  }, []);

  const [catalogItems, setCatalogItems] = useState([]);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProducts();
    setCatalogItems(prods);
  }

  function handleInputChange(e) {
    console.log(e.target.value);
    const val = e.target.value;
    const name = e.target.name;

    // updating a state variable
    // create a copy, modify and set
    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
    let productCopy = { ...product };
    productCopy.price = parseFloat(productCopy.price);
    let service = new DataService();
    service.saveProduct(productCopy);

    clearForm();
  }

  function clearForm() {
    setProduct({
      title: "",
      category: "",
      image: "",
      price: "",
    });
  }

  return (
    <main id="admin" className="container flex-col align">
      <h1>Administrator</h1>

      <div className="form-container flex-col justify">
        <h3>Register New Product</h3>
        <div>
          <label>Title: </label>
          <input
            value={product.name}
            onChange={handleInputChange}
            name="name"
            type="text"
          />
        </div>
        <div>
          <label>Category: </label>
          <input
            value={product.category}
            onChange={handleInputChange}
            name="category"
            type="text"
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            value={product.image}
            onChange={handleInputChange}
            name="image"
            type="text"
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            value={product.price}
            onChange={handleInputChange}
            name="price"
            type="number"
          />
        </div>
        <div>
          <button onClick={saveProduct} className="button">
            Save Product
          </button>
        </div>
      </div>
      <div className="product-list">
        <ul className="flex-col">
          <h2>Available Products</h2>
          {catalogItems.map((product) => (
            <li key={product._id} className="product-item flex-row align">
              <img src={`/images/${product.image}`} alt="" />
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              <button className="button">X</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
