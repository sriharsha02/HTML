let title = "Apple iPhone 13 (512GB) - Blue";
let noOfReviews = 34339;
let originalPrice = 89600;
let discount = 32;
let sellingPrice = 60900;
let imagePath = "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg";

//creating json objects

let productInfo = {
  title: "Apple iPhone 13 (512GB) - Blue",
  noOfReviews: 34339,
  originalPrice: 89600,
  discount: 32,
  sellingPrice: 60900,
  imagePath: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
};

let profileData = {
  name: "Harsha",
  mobile: 1234567891,
  email: "sample@sample.com",
  city: "abc",
  country: "def",
};

let courseDetails = {
  title: "React JS",
  description:
    "Build beautiful, powerful enterprise web applications using React",
  price: 15000,
  technologies: "React JS, HTML, CSS, JS",
};

console.log(productInfo.title);

console.log(productInfo.originalPrice);

console.log(productInfo.imagePath);

console.log(profileData.email);
console.log(profileData.mobile);
console.log(courseDetails.title);
console.log(courseDetails.technologies);
