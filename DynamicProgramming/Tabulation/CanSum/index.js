/*
Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum
using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative.
*/
const canSum = (targetSum, numbers) => {
  const table = new Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

/*
canSum(7, [5,3,4]) -> true
  0   1   2   3   4   5   6   7     <- index
| T | F | F | T | T | T | T | T |   <- boolean
*/
/*
m = targetSum
n = numbers.length
Time Complexity: O(mn)
Space Complexity: O(m)
*/

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
