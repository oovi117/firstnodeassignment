const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, my name is oovi\n");
});
const port = 8900;
server.listen(port, () => {
  console.log(`My server is running at http://localhost:${port}/`);
});
