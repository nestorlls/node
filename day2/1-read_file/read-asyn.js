// Reading a File asynchronously using nodejs
const fs = require('fs');

fs.readFile('./message.txt', (error, data) => {
  if (error) throw error;
  console.log(`Content: ${data}`);
});
