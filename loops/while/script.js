const table = Number(prompt("Enter your number "));

if (isNaN(table)) {
  alert("Please Enter Number not text ");
}
let i = 1;
while (i <= 10) {
  console.log(`${table}* ${i}= ${table * i}`);
  i++;
}
