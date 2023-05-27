const fs = require('fs');

// You have to pass the Relative path of the file from the current working directory
fs.rename('data.txt', 'new_data.txt', (err) => {
  if (err) throw err;

  console.log(`File renamed successfuly`);
});

// To check it's Asynchronous nature !
console.log('This method is Asynchronous');
