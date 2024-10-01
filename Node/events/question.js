// write a event to calculate the shipping charges of a product for daraz
const { EventEmitter } = require("events");

const event = new EventEmitter();

const product = {
  name: "Tshirt",
  price: 100,
  shippingRate: 10,
};

const calcTotal = (item) => {
  setTimeout(() => {
    const total = item?.price + (item?.shippingRate / 100) * item?.price;
    console.log({ total });
  }, 3000);
};

event.on("addToCart", () => {
  console.log("Calculatig total Amount.....");
});

event.addListener("addToCart", (product) => calcTotal(product));

event.emit("addToCart", product);
