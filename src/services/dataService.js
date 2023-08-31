import axios from "axios";

// let catalog = [
//   {
//     name: "Trek Top Fuel 9x9 XX1 AXS PRO EVO PLUS",
//     make: "Trek",
//     price: 11499,
//     dcprice: 0,
//     image: "bike1.jpg",
//     isDiscounted: false,
//     sizes: "S/M/L",
//     stars: "4.8",
//     _id: "1",
//   },
//   {
//     name: "Slash 9.9 XX1 AXS COMP PLUS V5 6.2 XMS",
//     make: "Slash",
//     price: 12550,
//     dcprice: 11000,
//     image: "slash9.png",
//     isDiscounted: true,
//     sizes: "S/M/L/XL",
//     stars: "4.4",
//     _id: "2",
//   },
//   {
//     name: "Fuel Stratosphere EX 9.9 XX1 AXS 5mm",
//     make: "Fuel",
//     price: 10750,
//     dcprice: 0,
//     image: "fuelex.png",
//     isDiscounted: false,
//     sizes: "S/M/L",
//     stars: "4.2",
//     _id: "3",
//   },
//   {
//     name: "Specialized Lightweight S-Works RS",
//     make: "Specialized",
//     price: 12000,
//     dcprice: 11000,
//     image: "specevo.png",
//     isDiscounted: true,
//     sizes: "S/M/L/XL",
//     stars: "4.5",
//     _id: "4",
//   },
//   {
//     name: "Specialized Featherweight EPIC Evo Pro",
//     make: "Specialized",
//     price: 8900,
//     dcprice: 0,
//     image: "specevopro.png",
//     isDiscounted: false,
//     sizes: "S/M/L",
//     stars: "4.2",
//     _id: "5",
//   },
//   {
//     name: "Specialized EVO G1 XX1 Stumpjumper",
//     make: "Specialized",
//     price: 5000,
//     dcprice: 4500,
//     image: "stumpjumper.png",
//     isDiscounted: true,
//     sizes: "S/M/L/XL",
//     stars: "4.0",
//     _id: "6",
//   },
// ];

class DataService {
  serverURL = "http://127.0.0.1:5000";

  async getProducts() {
    // uncomment next line to work with local data
    // return catalog

    // server call
    const response = await axios.get(this.serverURL + "/api/products");
    return response.data;
  }

  async getCategories() {
    const response = await axios.get(this.serverURL + "/api/categories");
    return response.data;
  }

  async getCoupons() {
    const response = await axios.get(this.serverURL + "/api/coupons");
    return response.data;
  }

  async saveProduct(prod) {
    const response = await axios.post(this.serverURL + "/api/products", prod);
    return response.data;
  }

  async deleteProduct(id) {
    const response = await axios.delete(
      this.serverURL + `/api/products/id/${id}`
    );
    return response.data;
  }

  async saveCoupon(coupon) {
    const response = await axios.post(this.serverURL + "/api/coupons", coupon);
    return response.data;
  }

  async deleteCoupon(id) {
    const response = await axios.delete(
      this.serverURL + `/api/coupons/id/${id}`
    );
    return response.data;
  }
}

export default DataService;
