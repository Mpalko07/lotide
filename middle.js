const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;