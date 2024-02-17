const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [3, 2, 1];

assertArraysEqual(arr1, arr3);
assertArraysEqual(arr1, arr2);