const savedTodata = () => {
  return new Promise((success, failure) => {
    setTimeout(() => {
      let internetSpeed = Math.floor(Math.random() * 10) + 1;
      if (internetSpeed > 4) {
        success("Success : connection is success");
      } else {
        failure("Failuer : weak connection ");
      }
    }, 3000);
  });
};

let result = savedTodata("My name is nishan");
console.log(result);

result
  .then(() => {
    console.log("Promise was resolved ");
    console.log(result);
  })
  .catch(() => {
    console.log("Promise was rejected ");
    console.log(result);
  });
