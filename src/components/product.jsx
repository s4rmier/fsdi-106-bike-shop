import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import DataContext from "../store/dataContext";

export default function Product(props) {
  const [quantity, setQuantity] = useState(0);
  const addToCart = useContext(DataContext).addToCart;

  function handleQuantityChange(val) {
    setQuantity(val);
  }

  function handleAddtoCart() {
    const itemAndQuantity = {
      ...props.data,
      quantity: quantity,
    };

    if (quantity) {
      addToCart(itemAndQuantity);
    } else {
      return;
    }
  }

  function getTotal() {
    return (
      quantity *
      (props.data.isDiscounted ? props.data.dcprice : props.data.price)
    ).toFixed(0);
  }

  return (
    <figure className="flex-col">
      <img src={"/images/" + props.data.image} alt="" />
      <h3
        className="sale-badge"
        style={{ display: props.data.isDiscounted ? "inline" : "none" }}
      >
        SALE
      </h3>
      <figcaption className="flex-col">
        <div className="flex-row align justify-sb">
          <div className="flex-row align justify-sb">
            <h4
              style={{
                textDecoration: props.data.isDiscounted
                  ? "line-through"
                  : "none",
              }}
            >
              ${props.data.price.toFixed(0)}
            </h4>
            <span
              style={{ display: props.data.isDiscounted ? "inline" : "none" }}
              className="discounted-price"
            >
              {" "}
              ${props.data.dcprice.toFixed(0)}
            </span>
          </div>

          <i className="fa-solid fa-star"> {props.data.stars}</i>
        </div>

        <h2>{props.data.name}</h2>

        <div className="prod-counter flex-row justify-sb align">
          <h3>Sizes: {props.data.sizes}</h3>
        </div>
        <div className="flex-row align justify-sb">
          <QuantityPicker onChange={handleQuantityChange} />
          <h3>Total: ${getTotal()}</h3>
          <button onClick={handleAddtoCart} className="button cart-button">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
