// Write fil synchronously
const fs = require('fs');
const content = 'We are writing this file synchronously using node.js';

fs.writeFileSync('content.txt', content);
console.log('File write Successfuly');
