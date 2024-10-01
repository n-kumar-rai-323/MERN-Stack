const one = () => {
  return 1;
};

const two = () => {
  return one() + one();
};

const three = () => {
  let ans = two() + one();
  console.log(ans);
};

three();
