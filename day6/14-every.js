const arr1 = [2, 4, 6, 8, 10];
const arr2 = [1, 3, 4, 6, 8];

function even(value) {
  if (value % 2 === 0) {
    return true;
  }
  return false;
}

const result1 = arr1.every(even);
const result2 = arr2.every(even);
console.log('Output of arr1 is: ', result1);
console.log('Output of arr2 is: ', result2);
