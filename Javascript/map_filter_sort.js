let courses = [
  {
    title: "ReactJs course for beginners",
    price: 15000,
    technology: "JavaScript",
    rating: 4.5,
    img: "",
  },
  {
    title: "AngularJs course for beginners",
    price: 10000,
    technology: "CSS",
    rating: 4,
    img: "",
  },
  {
    title: "Java Spring boot course for beginners",
    price: 20000,
    technology: "Java",
    rating: 3,
    img: "",
  },
  {
    title: "Data Science",
    price: 25000,
    technology: "Python",
    rating: 3.5,
    img: "",
  },
  { title: "AWS", price: 15000, technology: "Cloud", rating: 4.2, img: "" },
];

let result = courses.map((course) => {
  return course.technology;
});

console.log(result);

//------------------------------------------

let products = [
  {
    title: "iphone 15",
    price: 35000,
    brand: "Apple",
    img: "",
    rating: 4.5,
  },
  {
    title: "iphone 14",
    price: 30000,
    brand: "Apple",
    img: "",
    rating: 4,
  },
  {
    title: "Google Pixel",
    price: 34000,
    brand: "Google",
    img: "",
    rating: 4.4,
  },
  {
    title: "Samsung Galaxy",
    price: 50000,
    brand: "Samsung",
    img: "",
    rating: 3,
  },
];

let brands = products.map((product) => {
  return product.brand;
});

console.log(brands);
//-----------------------------------------------------

let courses2 = [
  {
    title: "ReactJs course for beginners",
    price: 15000,
    technology: "JavaScript",
    rating: 4.5,
    img: "",
  },
  {
    title: "AngularJs course for beginners",
    price: 10000,
    technology: "CSS",
    rating: 4,
    img: "",
  },
  {
    title: "Java Spring boot course for beginners",
    price: 20000,
    technology: "Java",
    rating: 3,
    img: "",
  },
  {
    title: "Data Science",
    price: 25000,
    technology: "Python",
    rating: 3.5,
    img: "",
  },
  { title: "AWS", price: 15000, technology: "Cloud", rating: 4.2, img: "" },
];

let filterText = "JavaScript";

let filteredData = courses2.filter((course) => filterText == course.technology);
// console.log(filteredData);

// let filterPrice = 20000;

let filteredData2 = courses2.filter((course) => course.price < 20000);
console.log(filteredData2);

//----------------------------------------------------------------------------

let products2 = [
  {
    title: "iphone 15",
    price: 35000,
    brand: "Apple",
    img: "",
    rating: 4.5,
  },
  {
    title: "iphone 14",
    price: 30000,
    brand: "Apple",
    img: "",
    rating: 4,
  },
  {
    title: "Google Pixel",
    price: 34000,
    brand: "Google",
    img: "",
    rating: 4.4,
  },
  {
    title: "Samsung Galaxy",
    price: 50000,
    brand: "Samsung",
    img: "",
    rating: 3,
  },
];

let sortedData = products2.sort((a, b) => {
  if (a.title > b.title) {
    return -1;
  }
});

console.log(sortedData);
