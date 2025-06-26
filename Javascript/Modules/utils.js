function isEmailValid(email) {
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function validateMobile(mobile) {
  if (mobile.length == 10) {
    return true;
  } else {
    return false;
  }
}

function getCurrentDate() {
  return new Date();
}

let API_URL = "https://api.softwareschool.co";

function checkLoginCookies() {
  console.log("No issues Found");
}
export { isEmailValid, validateMobile, getCurrentDate, API_URL };

// export default checkLoginCookies
