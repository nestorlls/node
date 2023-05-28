const arr = ['b', 'e', 'a', 'o', 'p', 'n', 'r'];
console.log(arr);

// TODO: Add using splice
let elementsRemoved = arr.splice(2, 2, 'paul', 'node.js');
console.log(arr);
console.log(elementsRemoved);

// TODO: Remove
let elementRemoved = arr.splice(2, 3);
console.log(arr);
console.log(elementRemoved);
