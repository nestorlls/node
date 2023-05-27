const string = '8ea';
const pattern = /^[a-fA-F0-9]/g;

const result = string.match(pattern);

if (result) {
  console.log('Valid Hexadecimal number');
} else {
  console.log('Not a valid Hexadecimal number');
}
