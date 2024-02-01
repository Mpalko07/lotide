// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const countLetters = function(sentence) {
  const letterCounts = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      // If letterCounts[letter] is undefined, assign it a value of 0, then increment by 1
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
  }

  return letterCounts;
};

// Test
const result1 = countLetters('is this working');
assertEqual(result1['i'], 3);
assertEqual(result1['s'], 2);
assertEqual(result1['t'], 1);
assertEqual(result1['h'], 1);
assertEqual(result1['w'], 1);
assertEqual(result1['o'], 1);
assertEqual(result1['r'], 1);
assertEqual(result1['k'], 1);
assertEqual(result1['n'], 1);
assertEqual(result1['g'], 1);

const result2 = countLetters('coding is fun');
assertEqual(result2['c'], 1);
assertEqual(result2['o'], 1);
assertEqual(result2['d'], 1);
assertEqual(result2['i'], 2);
assertEqual(result2['n'], 2);
assertEqual(result2['g'], 1);
assertEqual(result2['s'], 1);
assertEqual(result2['f'], 1);
assertEqual(result2['u'], 1);
