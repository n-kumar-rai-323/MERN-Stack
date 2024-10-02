const h1 = document.querySelector("h1");

const colorChangeFun = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber > 5) {
        reject(`Failuer : Random number is Greater than ${randomNumber}`);
      } else {
        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve(`Success : Successfully Color Chanded !!!!${randomNumber}`);
      }
    }, delay);
  });
};

const result = async () => {
  try {
    await colorChangeFun("red", 1000);
    await colorChangeFun("green", 1000);
    await colorChangeFun("blue", 1000);
    colorChangeFun("yellow", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  let num = 4;
  let result = num ** num;
  console.log(result);
};

result();
