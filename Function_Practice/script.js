// 1. write a javaScript function that reverse a number. Exammple x = 32243

const number = 32243;
const reverseNumbera = (num) => {
  const text = String(num);
  console.log({ text });
  const splitData = text.split("");
  console.log(splitData);
  const newReverse = splitData.reverse();
  console.log(newReverse);
  const joinData = newReverse.join("");
  console.log(joinData);
  return Number(joinData);
};

console.log(reverseNumbera(number));

const reverseNumber = (num) => String(num).split("").reverse().join("");
console.log(reverseNumber(123456789));

// write a javascript function that accepts a string as a parameter and counts the number of vowels
const vowels = (sentence) => {
  let count = 0;
  const text = sentence.toLowerCase();
  for (let i = 1; i <= text.length - 1; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

const count1 = vowels("My name is Nishan");
console.log(count1);
