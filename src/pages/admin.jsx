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

  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [couponList, setCouponList] = useState([]);
  async function loadCoupons() {
    let service = new DataService();
    let coupons = await service.getCoupons();
    setCouponList(coupons);
  }

  useEffect(function () {
    loadCatalog();
    loadCoupons();
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
    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function handleCouponChange(e) {
    console.log(e.target.value);
    const val = e.target.value;
    const name = e.target.name;
    let copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function removeProduct(id) {
    let service = new DataService();
    service.deleteProduct(id);

    let filteredArray = catalogItems.filter((product) => product._id !== id);
    setCatalogItems(filteredArray);
  }

  function removeCoupon(id) {
    let service = new DataService();
    service.deleteCoupon(id);

    let filteredArray = couponList.filter((coupon) => coupon._id !== id);
    setCouponList(filteredArray);
  }

  function saveProduct() {
    console.log(product);
    let productCopy = { ...product };
    productCopy.price = parseFloat(productCopy.price);
    let service = new DataService();
    service.saveProduct(productCopy);

    clearForm();
  }

  function saveCoupon() {
    let couponCopy = { ...coupon };
    couponCopy.discount = parseInt(couponCopy.discount);
    let service = new DataService();
    service.saveCoupon(couponCopy);
    console.log(couponCopy);

    clearForm();
  }

  function clearForm() {
    setProduct({
      title: "",
      category: "",
      image: "",
      price: "",
    });

    setCoupon({
      code: "",
      discount: "",
    });
  }

  return (
    <main id="admin" className="container flex-col justify">
      <h1>Administrator</h1>
      <div className="flex-row justify">
        <div className="flex-row justify">
          <div className="form-container flex-col align">
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
          <div className="coupon-form">
            <h3>Register Coupon Code</h3>
            <div>
              <label>Code: </label>
              <input
                value={coupon.code}
                onChange={handleCouponChange}
                name="code"
                type="text"
              />
            </div>
            <div>
              <label>Discount: </label>
              <input
                value={coupon.discount}
                onChange={handleCouponChange}
                name="discount"
                type="text"
              />
            </div>

            <button onClick={saveCoupon} className="button">
              Save Coupon
            </button>
          </div>
        </div>

        <div className="product-list flex-row">
          <ul className="flex-col">
            <h2>Available Products</h2>
            {catalogItems.map((product) => (
              <li key={product._id} className="product-item flex-row align">
                <img src={`/images/${product.image}`} alt="" />
                <h2>{product.name}</h2>
                <h3>${product.price}</h3>
                <button
                  onClick={() => removeProduct(product._id)}
                  className="button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <ul className="coupon-list flex-col">
            <h2>All Coupons</h2>
            {couponList.map((coupon) => (
              <li key={coupon.code} className="flex-row align">
                <h2>Code: {coupon.code}</h2>
                <h3>Discount: {coupon.discount}</h3>
                <button
                  onClick={() => removeCoupon(coupon._id)}
                  className="button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
