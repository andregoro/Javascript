//https://www.youtube.com/watch?v=7Oem0XPdTbg&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=3
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
