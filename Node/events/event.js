const { EventEmitter } = require("evets");

const event = new EventEmitter();
const myfunction = () => {
  setTimeout(() => {
    console.log("Hello world");
  }, 2000);
};

event.addListener("chat", myfunction); //create

event.on("chat", () => {
  //listen
  console.log("Someone is typig...");
});
event.emit("chat");
