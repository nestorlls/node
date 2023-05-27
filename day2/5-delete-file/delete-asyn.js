const fs = require('fs');
const filename = 'content.txt';

fs.unlink(filename, (error) => {
  if (error) throw error;

  console.log('File deleted successfuly');
});
