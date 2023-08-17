import "./admin.css";
import { useState } from "react";

export default function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });

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
            value={product.title}
            onChange={handleInputChange}
            name="title"
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
    </main>
  );
}
