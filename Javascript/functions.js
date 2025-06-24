/*
let email = "sample@sample.com";

let pwd = "12";

if (email.length > 0 && pwd.length > 2) {
  //call login api
  //read api response
  //display success/failure mesage
  console.log("login successfull");
} else {
  console.log("Incorrect details");
}

let name = "Harsha";
let mobile = "1234567891";

if (
  name.length > 2 &&
  mobile.length == 10 &&
  email.length > 0 &&
  pwd.length > 2
) {
  //call signup api
  //read api response
  //display success/failure message
  console.log("Login successful");
} else {
  console.log("Incorrect data");
}

*/

function login() {
  let email = "sample@sample.com";

  let pwd = "12";

  if (email.length > 0 && pwd.length > 2) {
    //call login api
    //read api response
    //display success/failure mesage
    console.log("login successfull");
  } else {
    console.log("Please enter the login data");
  }
}

function signUp() {
  let email = "sample@sample.com";
  let pwd = "12";
  let name = "Harsha";
  let mobile = "1234567891";

  if (
    name.length > 2 &&
    mobile.length == 10 &&
    email.length > 0 &&
    pwd.length > 2
  ) {
    //call signup api
    //read api response
    //display success/failure message
    console.log("Login successful");
  } else {
    console.log("Incorrect data");
  }
}

login();

//----------------------------------

let firstName = "Sri Harsha";

let lastName = "Akshintala";

let string1 = "dfsdf";
let string2 = "dfsdfdsf";
function concat(fName, lName) {
  return fName + " " + lName;
}

let fullName = concat(firstName, lastName);

let string3 = concat(string1, string2);

console.log(fullName);
console.log(string3);

//-------------------------------

let login2 = () => {
  let email = "sample@sample.com";

  let pwd = "12";

  if (email.length > 0 && pwd.length > 2) {
    //call login api
    //read api response
    //display success/failure mesage
    console.log("login successfull");
  } else {
    console.log("Please enter the login data");
  }
};

login2();

let firstName2 = "Sri Harsha";

let lastName2 = "Akshintala";

let concat2 = (fName, lName) => {
  return fName + " " + lName;
};

let result = concat2(firstName2, lastName2);

console.log(concat2);
console.log(result);
