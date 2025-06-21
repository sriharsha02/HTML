let isUserLoggedIn = false;

if (isUserLoggedIn) {
  console.log("Logout");
}

if (isUserLoggedIn == false) {
  console.log("Login");
}

let isFollowing = true;

if (isFollowing == false) {
  console.log("Please Follow");
}

if (isFollowing) {
  console.log("Un Follow");
}

if (isFollowing) {
  console.log("Un follow");
} else {
  console.log("Follow");
}
//-----------------------------------------------------
let cartPrice = 350;

let cutoff = 300;

if (cartPrice >= cutoff) {
  console.log("HUNGRY code - 10% off");
}
//-------------------------------=---------------------

let dbEmail = "sample@samplemail.com";
let dbPassword = "123456789";

let userEmail = "sample@samplemail.com";
let userPassword = "123456789";

if (dbEmail == userEmail && dbPassword == userPassword) {
  console.log("Logged in Succesfully");
} else {
  console.log("Incorrect Login credentials");
}

let profileData = {
  id: 10,
  name: "harsha",
  isAdmin: true,
};

if (profileData.isAdmin) {
  console.log("Admin Console");
}
