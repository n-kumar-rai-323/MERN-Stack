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
