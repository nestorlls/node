// serve mp4
const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log(`Port number: ${3000}`);

    // change MIME type to "video/mp4"
    res.writeHead(200, { 'Content-type': 'video/mp4' });

    // read video
    fs.exists('./assets/video/baby.mp4', (data) => {
      if (data) {
        const rvideo = fs.createReadStream('./assets/video/baby.mp4');
        rvideo.pipe(res);
      } else {
        res.end(`Its a 404`);
      }
    });
  })
  .listen(3000);
