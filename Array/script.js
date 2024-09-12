const list = [
  {
    name: "Nishan",
    mark: 45,
  },
  {
    name: "bikram",
    mark: 44,
  },
  {
    name: "bibek",
    mark: 7,
  },
];

const newList = list.sort((a, b) => a.mark - b.mark);
console.log(newList);

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: 12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
const newitem = items.sort((a, b) => a.value - b.value);
console.log(newitem);
