// for(begin; step condition;  ){

// }

// write a js program for multiplication table
const table = Number(prompt("Enter the number for table 2"));

if (isNaN(table)) {
  alert("You didn't enter number");
}

for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}
