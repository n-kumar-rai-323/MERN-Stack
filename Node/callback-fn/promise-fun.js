const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(console.log("Hello world"));
    resolve(20000);
  }, 2000);
});

// console.log(test);
test
  .then((result) => {
    console.log(`My result is ${result}`);
  })
  .catch((err) => {
    console.log(err);
  });

//write a promise function that sum 2 number passed to promise function
const sum = new Promise(a, b, (resolve, reject) => {
  setTimeout(() => {
    resolve(a + b);
  }, 2000);
});

console.log(sum(4, 5));
// .then((result) => {
//   console.log(`sum is ${result}`);
// })

// .catch((err) => {
//   console.log(err);
// });
