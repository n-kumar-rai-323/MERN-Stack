const cc = require("currency-converter-lt");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const converter = (amount, from, to) => {
      const currencyConverter = new cc();
      currencyConverter
        .from(from)
        .to(to)
        .amount(Number(amount))
        .convert()
        .then((response) => {
          res.end(`${amount} ${from} is equal to ${response} ${to}`);
        });
    };
    converter("1", "JPY", "NPR");
  })
  .listen(7999);
console.log("App is Running");
