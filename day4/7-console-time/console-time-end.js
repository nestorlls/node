console.time('division');
const num1 = 10;
const num2 = 20;
const result = num1 / num2;

if (result === 2) {
  console.log('Result: %d', result);
} else {
  console.log('Result: ' + result);
}

console.timeEnd('division');
