let catalog = [
  {
    name: "Trek Top Fuel 9x9 XX1 AXS PRO EVO PLUS",
    make: "Trek",
    price: 11499,
    dcprice: 0,
    image: "bike1.jpg",
    isDiscounted: false,
    sizes: "S/M/L",
    stars: "4.8",
    _id: "1",
  },
  {
    name: "Slash 9.9 XX1 AXS COMP PLUS V5 6.2 XMS",
    make: "Slash",
    price: 12550,
    dcprice: 11000,
    image: "slash9.jpeg",
    isDiscounted: true,
    sizes: "S/M/L/XL",
    stars: "4.4",
    _id: "2",
  },
  {
    name: "Fuel Stratosphere EX 9.9 XX1 AXS 5mm",
    make: "Fuel",
    price: 10750,
    dcprice: 0,
    image: "fuelex.png",
    isDiscounted: false,
    sizes: "S/M/L",
    stars: "4.2",
    _id: "3",
  },
  {
    name: "Specialized Lightweight S-Works RS PLUS",
    make: "Specialized",
    price: 12000,
    dcprice: 11000,
    image: "specevo.png",
    isDiscounted: true,
    sizes: "S/M/L/XL",
    stars: "4.5",
    _id: "4",
  },
  {
    name: "Specialized Featherweight EPIC Evo Pro",
    make: "Specialized",
    price: 8900,
    dcprice: 0,
    image: "specevopro.png",
    isDiscounted: false,
    sizes: "S/M/L",
    stars: "4.2",
    _id: "5",
  },
  {
    name: "Specialized EVO G1 XX1 Stumpjumper",
    make: "Specialized",
    price: 5000,
    dcprice: 4500,
    image: "stumpjumper.png",
    isDiscounted: true,
    sizes: "S/M/L/XL",
    stars: "4.0",
    _id: "6",
  },
  // {
  //   name: "Specialized Stumpjumper EVO",
  //   price: 5400,
  //   dcprice: 5000,
  //   image: "stumpjumperevo.jpg",
  //   isDiscounted: true,
  //   sizes: "S/M/L/XL",
  //   stars: "4.3",
  //   _id: "7",
  // },
];

class DataService {
  getProducts() {
    return catalog;
  }
}

export default DataService;
