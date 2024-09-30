const toGenerate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log(randomNumber);
      resolve();
    }, 1000);
  });
};

const demo = async () => {
  await toGenerate();
  await toGenerate();
  toGenerate();
};
demo();
