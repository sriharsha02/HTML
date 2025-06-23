let emails = [
  "user01@example.com",
  "sample.user@example.com",
  "test.email123@example.com",
  "generic.name@example.com",
  "demo.account@example.com",
];

let i = 0;
while (i < emails.length) {
  if (i > 2) {
    break;
  }
  console.log(emails[i]);
  i++;
}
