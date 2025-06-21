let courses = ["React JS", "Java SpringBoot", "testing", "Data Analytics"];

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}
//------------------------------------------

let products = [
  {
    title: "iphone 13",
    price: 25000,
  },
  {
    title: "iphone 14",
    price: 30000,
  },
  {
    title: "iphone 15",
    price: 35000,
  },
];
// i = 0 ; 0 < 3; true -> ; product[0]
//i = 1; 1 < 3 ; true -> product[1]
// i = 2; 2 < 3; true -> product[2]
// i = 3 ; 3 < 3 false -> exit
for (let i = 0; i < products.length; i++) {
  console.log(products[i].title);
  console.log(products[i].price);
}

//-----------------------------------------------------

let allCourses = [
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

for (let i = 0; i < allCourses.length; i++) {
  console.log(allCourses[i].l_course_name);
  console.log(allCourses[i].l_course_tags);
  console.log(allCourses[i].l_course_img_url);
}
