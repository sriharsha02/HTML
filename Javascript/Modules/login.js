import { isEmailValid, API_URL } from "./utils.js";

let email = "sample@sample.com";
let pword = "1234";

console.log(isEmailValid(email));

console.log(API_URL + "/auth/login");
