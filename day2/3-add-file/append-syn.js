// file append operation in nodejs
const fs = require('fs');
const content = 'We are Appending this file synchronously using node.js';

fs.appendFileSync('input-syn.txt', content);

console.log('File Appended successfuly');
