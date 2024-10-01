const getProduct = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * b);
    }, 2000);
  });
};

const demo = async () => {
  const result = await getProduct(2, 2);
  console.log({ result });
};
