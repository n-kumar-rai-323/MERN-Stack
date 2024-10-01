const qrcode = require("qrcode");
const http = require("http");
const { url } = require("inspector");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    qrcode.toDataURL("Nishan Rai", (err, url) => {
      if (err) console.log(err);
      res.end(`<img src="${url}"/>`);
    });
  })
  .listen(4000);

console.log("Server is Running");
