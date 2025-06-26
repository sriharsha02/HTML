let date = new Date();

console.log(date.getMonth());

console.log(date.getFullYear());

console.log(date.getDate());

console.log(date.getDay());

let months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

console.log(months[date.getMonth()]);

let weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

console.log(weekdays[date.getDay()]);
