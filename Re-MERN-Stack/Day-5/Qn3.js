// Write a program that calculates the factorial of a given number n using a loop.
let num = Number(prompt("Enter factorial Number"))

let fact =1;

if(isNaN(num)){
    alert("Please Enter Valid Number");
}
for(let i = 1; i<=num; i++){
    fact *=i
}

console.log(`${num} is factorial ${fact}`)