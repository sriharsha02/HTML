//Filter
let ecomProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    inStock: true,
    rating: 4.5,
    brand: "SoundPro",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2999,
    inStock: true,
    rating: 4.2,
    brand: "Speedster",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    inStock: false,
    rating: 4.0,
    brand: "TechTime",
  },
  {
    id: 4,
    name: "Office Chair",
    category: "Furniture",
    price: 6499,
    inStock: true,
    rating: 4.3,
    brand: "ComfortLine",
  },
  {
    id: 5,
    name: "Backpack",
    category: "Bags",
    price: 999,
    inStock: true,
    rating: 4.1,
    brand: "PackPro",
  },
  {
    id: 6,
    name: "LED Monitor",
    category: "Electronics",
    price: 7999,
    inStock: false,
    rating: 4.4,
    brand: "VisionMax",
  },
  {
    id: 7,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 1499,
    inStock: true,
    rating: 4.6,
    brand: "ClickMaster",
  },
  {
    id: 8,
    name: "Water Bottle",
    category: "Home",
    price: 299,
    inStock: true,
    rating: 4.0,
    brand: "HydroPlus",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 2599,
    inStock: true,
    rating: 4.2,
    brand: "BassBoom",
  },
  {
    id: 10,
    name: "Yoga Mat",
    category: "Fitness",
    price: 799,
    inStock: false,
    rating: 3.9,
    brand: "FlexFit",
  },
];

let filteredProduct = ecomProducts.filter((product) => product.price > 5000);

console.log(filteredProduct);

//-------------------------------

console.log("Items in Desc order");
let desc = ecomProducts.sort((a, b) => {
  if (a.rating > b.rating) {
    return -1;
  }
});

console.log(desc);

console.log("Items in Asc order");

let asc = ecomProducts.sort((a, b) => {
  if (a.rating < b.rating) {
    return -1;
  }
});

console.log(asc);

//--------------------------map

let name = ecomProducts.map((product) => {
  return product.name;
});

console.log("Names Array", name);
