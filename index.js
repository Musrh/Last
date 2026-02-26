const http = require("http");

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("🚀 Railway + Node HTTP OK");
});

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
