const fs = require('fs');

// you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('data.txt', 'nexData.txt');

console.log('file renamed successfuly');

// To check it's synchronously  nature!
console.log('This method is Synchronously');
