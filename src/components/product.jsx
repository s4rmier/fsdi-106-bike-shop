import QuantityPicker from "./quantityPicker";

export default function Product(props) {
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
              ${props.data.price}
            </h4>
            <span
              style={{ display: props.data.isDiscounted ? "inline" : "none" }}
              className="discounted-price"
            >
              {" "}
              ${props.data.dcprice}
            </span>
          </div>

          <i className="fa-solid fa-star"> 4.5</i>
        </div>
        <h2>{props.data.name}</h2>

        <div className="flex-row justify-sb align">
          <h3>Sizes: {props.data.sizes}</h3>
          <QuantityPicker />
        </div>
      </figcaption>
    </figure>
  );
}
