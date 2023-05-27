// serve-mp3
const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log(`Port number: ${3000}`);

    // change MIME type to 'audio/mp3'
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });

    // read audio
    fs.exists('./assets/audio/town-10169.mp3', (data) => {
      if (data) {
        const rstream = fs.createReadStream('./assets/audio/town-10169.mp3');
        rstream.pipe(res);
      } else {
        res.end(`Its a 404`);
      }
    });
  })
  .listen(3000);
