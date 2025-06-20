let videoDetails = {
  title: "JavaScript Tutorial - JSON",
  channelName: "Software School",
  views: "2000",
  likes: "200",
  thumbNailPath: "",
};

console.log(videoDetails);
videoDetails.views = 2010;

console.log(videoDetails);

videoDetails["views"] = 3000;
videoDetails["likes"] = 300;

console.log(videoDetails);

let courseDetails = {
  title: "React JS",
  description:
    "Build beautiful, powerful enterprise web applications using React",
  price: 15000,
  technologies: "React JS, HTML, CSS, JS",
};

//adding a new KV pair

courseDetails.batchStartDate = "10/10/25";

console.log(courseDetails);

courseDetails.reviews = "Good";
console.log(courseDetails);

delete courseDetails.technologies;

console.log(courseDetails);

delete courseDetails.price;

console.log(courseDetails.price);
