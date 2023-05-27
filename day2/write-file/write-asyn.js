// Write a File Asyncrhonously using nodejs
const fs = require('fs');
const contents = 'This is the content in the file';
fs.writeFile('./message.txt', contents, (err) => {
  if (err) throw err;
  console.log("It' saved!");
});
