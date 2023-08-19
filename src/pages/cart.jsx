import { useContext } from "react";
import DataContext from "../store/dataContext";
import "./cart.css";

export default function Cart() {
  const cartQty = useContext(DataContext).cart;

  return (
    <main id="cart">
      <h1>Are you ready to checkout?</h1>
      <h2>You have {cartQty.length} items in your cart</h2>
    </main>
  );
}
