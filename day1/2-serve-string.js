const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello world from server');
  response.end();
});

server.listen(port, host, (err) => {
  if (err) {
    return console.log(`Error ocurred: ${err}`);
  }

  console.log(`Server is listening on ${host}:${port}`);
});
