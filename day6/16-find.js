const arr1 = [2, 4, 6, 8, 10];
const arr2 = [2, 3, 4, 6, 8];

// is odd?
const odd = (value) => {
  return value % 2 === 1;
};

const result1 = arr1.find(odd);
const result2 = arr2.find(odd);

console.log('Output of arr1 is: ', result1 ?? 'No is odd');
console.log('Output of arr2 is: ', result2);
