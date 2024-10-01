const http = require("http");
const os = require("os");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const totalMemory = os.totalmem / 1024 / 1024 / 1024;
    const freeMemory = os.freemem / 1024 / 1024 / 1024;

    res.end(
      JSON.stringify({
        data: {
          totalRam: `You have ${totalMemory}`,
          freeMemory: `You have ${freeMemory}`,
        },
      })
    );
  })
  .listen(9000);
console.log("server is running ");
