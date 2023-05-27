// serve-pdf
const http = require('http');
const fs = require('fs');

console.log(`Server will listen at 127.0.0.1:3000`);

http
  .createServer((req, res) => {
    console.log(`port number: ${3000}`);

    // change the MIME type to application/pdf
    res.writeHead(200, { 'Content-Type': 'application/pdf' });

    // read pdf file
    fs.readFile('./assets/pdf/Paul_LLanque_CV.pdf', (error, data) => {
      if (error) {
        res.json({ status: 'error', msg: error });
      } else {
        res.write(data);
        res.end();
      }
    });
  })
  .listen(3000);
