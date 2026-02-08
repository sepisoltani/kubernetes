const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Kubernetes Version 2');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
