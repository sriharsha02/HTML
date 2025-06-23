let courses = ["React Js", "Java", "Python", "DSA"];

for (let i = 0; i < courses.length; i++) {
  if (courses[i] == "Java") {
    continue;
  }
  console.log(courses[i]);
}

//--------------------

let products = [
  { title: "iphone13", price: 30000 },
  { title: "iphone15", price: 55000 },
  { title: "iphone14", price: 30000 },
];

let product = "";
for (let i = 0; i < products.length; i++) {
  if (products[i].title == "iphone15") {
    product = products[i];
    break;
  }
  console.log(products[i]);
}

console.log(product);
