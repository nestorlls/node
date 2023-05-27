// create new console
const fs = require('fs');
const { Console } = require('console');

const out = fs.createWriteStream('./sdout.log');
const errOutput = fs.createWriteStream('./stderr.log');

// custom simple print
const print = new Console(out, errOutput);

// now we can use it like console
const roll = 893943;
print.log('roll: %d', roll);
print.log('This wil be stored in a file');
