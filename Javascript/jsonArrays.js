let product1Data = {
  title: "iPhone 16 128 GB: 5G Mobile",
  price: 79900,
  reviews: 831,
  discount: 8,
  imagePath: "https://m.media-amazon.com/images/I/712SuRmHG4L._SL1500_.jpg",
};

let product2Data = {
  title: "Apple iPhone 15 (128 GB) - Pink",
  price: 69900,
  reviews: 4098,
  discount: 14,
  imagePath: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
};

let product3Data = {
  title: "Apple iPhone 15 (128 GB) - Pink",
  price: 69900,
  reviews: 4098,
  discount: 14,
  imagePath: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
};
let product4Data = {
  title: "Apple iPhone 15 (128 GB) - Pink",
  price: 69900,
  reviews: 4098,
  discount: 14,
  imagePath: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
};

let products = [
  {
    title: "iPhone 16 128 GB: 5G Mobile",
    price: 79900,
    reviews: 831,
    discount: 8,
    imagePath: "https://m.media-amazon.com/images/I/712SuRmHG4L._SL1500_.jpg",
  },
  {
    title: "Apple iPhone 15 (128 GB) - Pink",
    price: 69900,
    reviews: 4098,
    discount: 14,
    imagePath: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
  },
  {
    title: "Apple iPhone 15 (128 GB) - Pink",
    price: 69900,
    reviews: 4098,
    discount: 14,
    imagePath: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg",
  },
];

console.log(products[0].title);
console.log(products[2].price);
console.log(products[2].reviews);

console.log(products[1].imagePath);

let courses = [
  {
    l_course_id: 101,
    course_title: "Frontend Mastery with React",
    technologies: "React,Redux,HTML,CSS,JavaScript,Git,GitHub,Bootstrap",
    learn:
      "Master React from scratch#Build responsive UIs#Integrate APIs#Authentication with JWT#Deploy apps on Netlify",
    points:
      "4 months duration,Hands-on projects,Resume-ready skills,Expert mentorship",
    includes:
      "Certificate of completion#Mock interviews#Portfolio projects#Resume building#Job assistance",
    category: "Frontend",
    l_course_name: "React Frontend Engineer",
    l_course_desc:
      "Gain real-world experience by building dynamic frontend applications using the React ecosystem.",
    l_course_tags:
      "React, Redux, HTML, CSS, JavaScript, Git, GitHub, Bootstrap",
    l_course_img_url:
      "https://dummyimage.com/600x400/000/fff&text=React+Course",
    l_course_price: "20000",
    l_course_is_active: "yes",
    l_course_created_on: "2023-01-15 10:00:00",
    l_course_stopped_on: null,
    l_course_final_comments: null,
    l_course_type: "live",
    l_offer: "10%",
    l_course_seo_url: "frontend-react-course",
    l_course_no_of_classes: 45,
    l_course_category: "Frontend Development",
    start_date: "2023-04-01",
    end_date: "2023-07-31",
    seo_title: "React Frontend Engineer - Learn by Building",
    seo_desc:
      "A hands-on course to master frontend development using React, build projects, and become job-ready.",
    salary: "6 - 12 Lac",
    jobs_posted: "18000",
    result: "success",
    msg: "",
    dataset: "courses",
  },
];

console.log(courses[0].l_course_name);
console.log(courses[0].l_course_tags);
console.log(courses[0].l_course_img_url);
let points = courses[0].points.split(",");

console.log(points);
