import { isEmailValid, validateMobile } from "./utils.js";

let name = "harsha";
let email = "sample@sample.com";
let pword = "12345";
let mobile = 1234567891;

console.log(isEmailValid(email));
console.log(validateMobile(mobile));
