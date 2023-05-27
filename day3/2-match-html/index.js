const fs = require('fs');

// file html
const filename = 'index.html';

// save in str after convert to string
const str = fs.readFileSync(filename, 'utf-8');

// pattern
const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

const myArray = str.match(pattern);

console.log(pattern);

const len = myArray.length;

console.log(`Occurrences of pattern in the string is: ${len}`);
