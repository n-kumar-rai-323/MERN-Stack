// Write a program that checks if a given number is a palindrome using a loop. A palindrome is a number that reads the same backward as forward.
const number = prompt("Enter a number")

const originalNumber = Math.abs(number).toString();


let reversedNumber = "";

for(let i = originalNumber.length-1; i>=0; i--){
  
    reversedNumber += originalNumber[i]

}

if(originalNumber === reversedNumber){
    alert(`${number} is a palindrome`)
}else{
    alert(`${number} is Not a palindrome`)
}