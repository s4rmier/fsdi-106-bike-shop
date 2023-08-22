import DataContext from "../store/dataContext";
import { useContext } from "react";

export default function MobileCart(props) {
  const removeFromCart = useContext(DataContext).removeFromCart;

  return (
    <li>
      <figure className="flex-row">
        <img src={`/images/${props.data.image}`} alt="" />
        <figcaption className="flex-col">
          <div className="flex-row">
            <h3 className="mobile-cart-price">
              ${props.data.isDiscounted ? props.data.dcprice : props.data.price}
            </h3>
            <h3>QTY: {props.data.quantity}</h3>
          </div>
          <h2>{props.data.name}</h2>
          <div className="flex-row">
            <h3 className="mobile-cart-subtotal">
              Subtotal: $
              {(props.data.isDiscounted
                ? props.data.dcprice
                : props.data.price) * props.data.quantity}
            </h3>
            <h3
              onClick={() => {
                removeFromCart(props.data._id);
              }}
              className="mobile-cart-remove"
            >
              Remove
            </h3>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
