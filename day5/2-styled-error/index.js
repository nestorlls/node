const fs = require('fs');

function styledCallback(err, data) {
  if (err) {
    console.error('Error: ', err);
    return;
  }

  console.log(data);
}

fs.readFile('./index.txt', 'utf-8', styledCallback);
fs.readFile('file_that_not_exist', styledCallback);
