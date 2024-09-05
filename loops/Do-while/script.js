// do while
// begin step
// do{
//code execution
// increase begin step
// }while(step condition)

const table = Number(prompt("Enter your number "));
if (isNaN(table)) {
  alert("please enter number not text");
}
let i = 1;
do {
  console.log(`${table}* ${i} = ${table * i}`);
  i++;
} while (i <= 10);
