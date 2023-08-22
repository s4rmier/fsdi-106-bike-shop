export default function CartItem(props) {
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
        <button className="button cart-remove">Remove</button>
      </td>
    </tr>
  );
}
