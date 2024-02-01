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
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
  }

  return letterCounts;
};

// Test
const result = countLetters('Is this working');
assertEqual(result['I'], 1);
assertEqual(result['s'], 1);
assertEqual(result['t'], 1);
assertEqual(result['h'], 1);
assertEqual(result['i'], 1);
assertEqual(result['w'], 1);
assertEqual(result['o'], 1);
assertEqual(result['r'], 1);
assertEqual(result['k'], 1);
assertEqual(result['n'], 1);
assertEqual(result['g'], 1);