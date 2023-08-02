import { useState } from "react";

export default function QuantityPicker() {
  let [quantity, setQuantity] = useState(0);

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
  }

  function decrease() {
    if (quantity === 0) return;
    let val = quantity - 1;
    setQuantity(val);
  }

  return (
    <div className="quantity-picker">
      <button className="qty-btn" disabled={quantity === 0} onClick={decrease}>
        -
      </button>

      <label>{quantity}</label>
      <button className="qty-btn" onClick={increase}>
        +
      </button>
    </div>
  );
}
