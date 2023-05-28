const arr1 = [2, 4, 6, 8, 10];
const arr2 = [2, 3, 5, 6, 8];

// is even?
const even = (value) => {
  return value % 2 === 0;
};

const result1 = arr1.filter(even);
const result2 = arr2.filter(even);

console.log('Output of arr1 is: ', result1);
console.log('Output of arr2 is: ', result2);
