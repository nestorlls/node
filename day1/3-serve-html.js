// serve-html
const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log(`Port number: ${3000}`);

    // vamos a cambiar el tipo MIME de "text/plain" a "text/hmtl"
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // leyendo el Content file
    fs.readFile('index.html', (err, data) => {
      // checking for errors
      if (err) throw err;
      console.log('Operation Success');

      // Enviamos la respuesta
      res.end(data);
    });
  })
  .listen(3000);
