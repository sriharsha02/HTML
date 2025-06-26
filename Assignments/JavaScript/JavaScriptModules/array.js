import  {printArray, calcDiscount, getDate } from "./utils.js";

let arr = [2, 4, 6, 8, 10];
printArray(arr);

let price = 2500;

let discount = 250;
let result = calcDiscount(price, discount);
console.log(result);

let date = getDate()

console.log(date);