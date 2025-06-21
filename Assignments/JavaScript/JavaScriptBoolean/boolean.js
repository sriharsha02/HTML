let ecommerceProducts = [
  {
    product_id: 101,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    in_stock: true,
    rating: 4.3,
    discount: "10%",
    brand: "LogiTech",
    image_url: "https://dummyimage.com/200x200/000/fff&text=Mouse",
  },
  {
    product_id: 102,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 499,
    in_stock: true,
    rating: 4.0,
    discount: "20%",
    brand: "Zara",
    image_url: "https://dummyimage.com/200x200/000/fff&text=T-Shirt",
  },
  {
    product_id: 103,
    name: "1L Water Bottle",
    category: "Home & Kitchen",
    price: 299,
    in_stock: false,
    rating: 3.9,
    discount: "15%",
    brand: "Milton",
    image_url: "https://dummyimage.com/200x200/000/fff&text=Bottle",
  },
];

let facebookFriends = [
  {
    user_id: 201,
    name: "Ananya Sharma",
    profile_pic: "https://dummyimage.com/100x100/007bff/fff&text=A",
    mutual_friends: 12,
    status: "Online",
  },
  {
    user_id: 202,
    name: "Rohit Verma",
    profile_pic: "https://dummyimage.com/100x100/28a745/fff&text=R",
    mutual_friends: 5,
    status: "Offline",
  },
  {
    user_id: 203,
    name: "Sneha Patel",
    profile_pic: "https://dummyimage.com/100x100/ffc107/000&text=S",
    mutual_friends: 20,
    status: "Busy",
  },
];

let youtubeVideos = [
  {
    video_id: "yt001",
    title: "Learn JavaScript in 30 Minutes",
    channel_name: "CodeWithMe",
    views: "1.2M",
    upload_date: "2023-05-10",
    thumbnail_url: "https://dummyimage.com/320x180/000/fff&text=JS+Tutorial",
    duration: "29:45",
  },
  {
    video_id: "yt002",
    title: "10 Minute Home Workout",
    channel_name: "FitLife",
    views: "890K",
    upload_date: "2023-08-02",
    thumbnail_url: "https://dummyimage.com/320x180/000/fff&text=Workout",
    duration: "10:00",
  },
  {
    video_id: "yt003",
    title: "Top 5 Travel Destinations in 2024",
    channel_name: "Wanderlust",
    views: "2.3M",
    upload_date: "2024-01-18",
    thumbnail_url: "https://dummyimage.com/320x180/000/fff&text=Travel+2024",
    duration: "8:25",
  },
];

console.log(facebookFriends[0].name == facebookFriends[1].name);

console.log(youtubeVideos[0].channel_name == youtubeVideos[0].channel_name);

let duration = youtubeVideos[0].duration > 18;

console.log(duration);
