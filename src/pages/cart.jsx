import { useContext } from "react";
import DataContext from "../store/dataContext";
import "./cart.css";
import CartItem from "../components/cartitem";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useContext(DataContext).cart;

  let cartQuantity = 0;

  cartItems.forEach((element) => {
    cartQuantity += element.quantity;
  });

  let cartTotal = 0;

  cartItems.forEach((element) => {
    let subtotal = element.price * element.quantity;
    cartTotal += subtotal;
  });

  return (
    <main id="cart">
      {cartQuantity ? (
        <div>
          <h1>Are you ready to checkout?</h1>
          <h2>
            You have {cartQuantity} item{cartQuantity > 1 && "s"} in your cart
          </h2>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <Link to="/catalog">
            <button className="button">Shop Now</button>
          </Link>
        </div>
      )}

      <table className="container">
        <tr>
          <th> </th>
          <th>Price</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th> </th>
        </tr>
        {cartItems.map((item) => (
          <CartItem data={item} />
        ))}
        <tr className="cart-total">
          <td colSpan={4}>Total</td>
          <td>${cartTotal}</td>
        </tr>
      </table>
    </main>
  );
}
