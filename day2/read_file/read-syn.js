const fs = require('fs');
const fileName = './message.txt'; // name of the file to be read
const content = fs.readFileSync(fileName);

console.log(`content: ${content}`);
