// Write a program that calculates the sum of the digits of a given number using a loop.

const number = prompt("Enter your number")

const numToStr = Math.abs(number).toString();

let sum = 0 ;

for(let i =0;i<numToStr.length; i++){
    console.log(i)
    console.log(typeof(numToStr[i]))
    sum +=Number(numToStr[i])
    console.log(typeof(sum))
}
console.log(`totle sum is ${sum}`)