import QuantityPicker from "./quantityPicker";

export default function Product() {
  return (
    <figure className="flex-col">
      <img src="/images/bike1.jpg" alt="" />
      <figcaption className="flex-col">
        <div className="flex-row justify-sb">
          <h4>$11499</h4>
          <i className="fa-solid fa-star"> 4.5</i>
        </div>
        <h2>TREK TOP FUEL 9X9 XX1 AXS</h2>
        <div className="flex-row justify-sb align">
          <h3>Sizes: S/M/L</h3>
          <QuantityPicker />
        </div>
      </figcaption>
    </figure>
  );
}
