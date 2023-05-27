const fs = require('fs');

// file where be text
const filname = 'data.txt';

// save in str
const str = fs.readFileSync(filname, 'utf-8');

// regex
const pattern = /man/gim;

// is match?
const myArray = str.match(pattern);

// count words
const len = myArray.length;

console.log(`Occurrences of pattern in the string is: ${len}`);
