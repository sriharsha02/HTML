let productInfo = {
  title: "Redmi Note 14 5G (Titan Black, 8GB RAM 128GB Storage)",
  rating: 3.8,
  reviews: 945,
  price: 17999,
  discount: 22,
  originalPrice: 22999,
};

let myDetails = {
  name: "Harsha",
  age: 28,
  gender: "male",
  city: "Koduru",
};

let instagramPost = {
  content: "Cricket video reel",
  duration: "55 seconds",
  likes: 1000,
  comments: 100,
  shares: 50,
};

let ecommerceOrder = {
  item: "mobile",
  title: "Redmi",
  value: 10000,
  address: "My home",
  "payment mode": "COD",
};

console.log(productInfo.discount);
productInfo.discount = 25;
console.log(productInfo.discount);

console.log(productInfo.originalPrice);
productInfo.originalPrice = 25000;
console.log(productInfo.originalPrice);

console.log(myDetails.age);
myDetails.age = 27;
console.log(myDetails.age);

console.log(myDetails.name);
myDetails.name = "Sri Harsha";
console.log(myDetails.name);

console.log(instagramPost.comments);

instagramPost.comments = 55;
console.log(instagramPost.comments);

console.log(instagramPost.likes);
instagramPost["likes"] = 1100;
console.log(instagramPost["likes"]);

console.log(ecommerceOrder.address);

ecommerceOrder.address = "Office";

console.log(ecommerceOrder.address);

console.log(ecommerceOrder["payment mode"]);

ecommerceOrder["payment mode"] = "online";

console.log(ecommerceOrder["payment mode"]);
