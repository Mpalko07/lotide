// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle')
// // tests
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("Returns [2] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(input, [1, 2, 3]);
  });

  it("Returns [3] for [1, 2, 3, 4, 5]", () => {
    const input = [1, 2, 3, 4, 5];
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    assert.deepEqual(input, [1, 2, 3, 4, 5]);
  });

  it("Returns [2, 3] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(input, [1, 2, 3, 4]);
  });

  it("Returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const input = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    assert.deepEqual(input, [1, 2, 3, 4, 5, 6]);
  });
});
