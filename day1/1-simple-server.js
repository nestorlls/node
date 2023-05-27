// simple server in node
const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log('Server working');
  response.end('Server working success');
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log(`Error ocurred: ${error}`);
  }

  console.log(`Server is listening on ${host}:${port}`);
});
