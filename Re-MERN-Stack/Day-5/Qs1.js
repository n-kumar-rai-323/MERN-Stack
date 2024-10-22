// Write a program that takes a number n as input and prints the sum of the first n natural numbers using a loop.

// Input: the number n
let n = parseInt(prompt("Enter a number: "));

// Initialize sum to 0
let sum_n = 0;

// Loop to calculate the sum of the first n natural numbers
for (let i = 1; i <= n; i++) {
    sum_n += i;
}

// Output the result
console.log(`The sum of the first ${n} natural numbers is: ${sum_n}`)