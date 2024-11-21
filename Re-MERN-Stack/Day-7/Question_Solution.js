// 1.write a javascript function that reverses a Number. Example x =32243; Expected Output : 34223
const userInput = prompt("Enter a number to reverse:");

const Data = (number)=>{
    const reversed =number.toString().split('').reverse().join('');
    // console.log(reversed)
    return parseInt(reversed,10);
}

const reverseNumber = Data(Number(userInput))
console.log(reverseNumber)

// Explanation:
// num.toString(): Converts the number to a string.
// .split(''): Splits the string into an array of characters.
// .reverse(): Reverses the array.
// .join(''): Joins the array back into a string.
// parseInt(..., 10): Converts the reversed string back into a number.