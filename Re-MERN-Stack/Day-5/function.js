// Write a function that takes two numbers as arguments and returns their sum.?
// ES5
function sum(a, b) {
    const c = a + b
    return c
}
const result = sum(5,3);
console.log(result)
// ES6
const sum2 = (a, b) => {
    return a + b
}
sum2(2,5);
console.log(sum2)