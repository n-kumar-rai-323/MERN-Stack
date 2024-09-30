const savetodb = () => {
  return new Promise((resolved, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolved("Success: Data was saved");
    } else reject("failuer: weak connection");
  });
};

savetodb("hello world ")
  .then((result) => {
    console.log("Data1 saved");
    console.log(`result of promise: ${result}`);
    return savetodb("hello world 2");
  })
  .then((result) => {
    console.log("Data2 saved");
    console.log(`result of promise: ${result}`);
  })
  .catch(() => {
    console.log("Promise is rejected");
  });
