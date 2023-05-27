// serve-json
const http = require('http');
const fs = require('fs');

console.log(`Server will listen at: 107.0.0.1:3000`);

http
  .createServer((req, res) => {
    // change the MIME type to "application/json"
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // create a JSON
    const jsonResponse = {
      status: 200,
      message: 'successful',
      result: ['sunday', 'monday', 'tuesday', 'wednesday'],
      code: 2000,
    };

    console.log('Server running');

    res.end(JSON.stringify(jsonResponse));
  })
  .listen(3000);
