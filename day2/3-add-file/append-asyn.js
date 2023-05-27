// Writing a file asynchronously using nodejs
const fs = require('fs');
const newData = 'This data will be appended at the end of the file';

fs.appendFile('input.txt', newData, (err) => {
  if (err) throw err;
  console.log(`The New Content was appended Successfuly`);
});
