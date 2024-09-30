const saveTodb = () => {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
};

saveTodb("Nishan ")
  .then(() => {
    console.log("data saved, promise was resolved.");
    return saveTodb("helloworld");
  })
  .then(() => {
    console.log("data2 saved");
    return saveTodb("nishan");
  })
  .then(() => {
    console.log("data3 was saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
