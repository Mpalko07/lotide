const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} is equal to ${array2}`);
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} is not equal to ${array2}`);
  }
};

const flatten = function(arr) {
  let flattenedArray = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      // if it is an array
      flattenedArray = flattenedArray.concat(element);
    } else {
    // if not array
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

// Test cases
const result = flatten([1, 2, [3, 4], 5, [6]]);
console.log(result);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);