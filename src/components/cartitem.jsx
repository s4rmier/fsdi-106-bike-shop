import DataContext from "../store/dataContext";
import { useContext } from "react";

export default function CartItem(props) {
  const removeFromCart = useContext(DataContext).removeFromCart;

  return (
    <tr>
      <td>
        <img src={`/images/${props.data.image}`} alt="" />
      </td>
      <td>${props.data.price}</td>
      <td>{props.data.name}</td>
      <td>{props.data.quantity}</td>
      <td>${props.data.price * props.data.quantity}</td>
      <td>
        <button
          onClick={() => {
            removeFromCart(props.data._id);
          }}
          className="button cart-remove"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
