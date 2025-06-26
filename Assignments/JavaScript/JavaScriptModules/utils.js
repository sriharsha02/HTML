function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function getDate() {
  return new Date();
}
function calcDiscount(price, disc) {
  return price - disc;
}
export { printArray, getDate, calcDiscount };
