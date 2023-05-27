const fs = require('fs');
const filename = 'content.txt';

fs.unlinkSync(filename);

console.log('File deleted Successfuly');
