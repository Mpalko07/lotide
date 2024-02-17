const assertEqual = require('../assertEqual');

const tail = require('../tail');

// Test Case 1: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 

// Test Case 2: Check the tail of an array with multiple elements
const numbers = [1, 2, 3, 4, 5];
const tailOfNumbers = tail(numbers);
assertEqual(tailOfNumbers[0], numbers[1]); 
assertEqual(tailOfNumbers.length, numbers.length - 1); 

// Test Case 3: Check the tail of an array with one element
const singleElementArray = ["OnlyElement"];
assertEqual(tail(singleElementArray).length, 0);

// Test Case 4: Check the tail of an empty array
const emptyArray = [];
assertEqual(tail(emptyArray).length, 0);