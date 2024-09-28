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
