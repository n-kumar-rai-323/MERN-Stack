// Write a program that takes a string as input and prints it in reverse using a loop.
let inputString = prompt("Enter a string:");

let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i]
}
console.log(`Reversed string: ${reversedString}`);