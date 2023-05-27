const password = 'Aa#1aaabcde';
const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const result = password.match(pattern);

if (result) {
  console.log('Valid password');
} else {
  console.log('Invalid password');
}
