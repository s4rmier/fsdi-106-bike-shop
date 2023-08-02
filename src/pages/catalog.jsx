import Product from "../components/product";

export default function Catalog() {
  return (
    <main className="catalog">
      <div className="catalog-container flex-row">
        <div className="product-list flex-row justify">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </main>
  );
}
