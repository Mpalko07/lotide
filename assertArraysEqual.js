// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

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
  const areEqual = eqArrays(array1, array2);

  if (areEqual) {
    console.log("Equal");
  } else { 
    console.log("Not Equal");
  }
};

// TEST CODE
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

assertArraysEqual(arr1, arr2);