const { mailer } = require("./index");

mailer({
  to: "infonkumarrai323@gmail.com",
  subject: "hello world",
  message: "<h1> Hi, How are you ?</h1>",
});
