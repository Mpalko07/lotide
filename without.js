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
// The without function takes two arrays as arguments, and returns a copy of the first array with any elements present in the second array removed.
const without = function(source, itemsToRemove) {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }

  return result;
};

// Test cases
const result1 = without([1, 2, 3], [1]);
const result2 = without(["1", "2", "3"], [1, 2, "3"]);

assertArraysEqual(result1, [2, 3]);
assertArraysEqual(result2, ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);