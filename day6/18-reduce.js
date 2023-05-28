const arr1 = [5, 5, 7, 8, 6];

console.log(arr1);

function mul(total, value) {
  total = total * value;
  return total;
}

const output = arr1.reduce(mul);

console.log('The product of the array is: %d', output);
