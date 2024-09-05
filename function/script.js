// // function are the main building block of any program
// // 2 core principles
// // 1. DRY (Donot Repeat yourself)
// // 2. SoC (Separation of Concern)

// // 2 ways to write function
// // ES5

// write a sum function for adding 2 numbers
// ES5
function sum(a, b) {
  const c = a + b;
  return c;
}

const result = sum(4, 5);
const result2 = sum(44, 55);

console.log({ result, result2 });
// ES6

const sq = (x) => {
  return x * x;
};

const newAnswer = sq(4);
console.log({ newAnswer });
