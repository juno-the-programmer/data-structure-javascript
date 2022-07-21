/*
Write a function fib(n) that takes in a number as an argument.
The function should return the n-th number of the Fibonacci sequence.

The 0th number of the sequence is 0.
The 1th number of the sequence is 1.

To generate the next number of the sequence, we sum the previous two.

n:      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...
fib(n): 0, 1, 1, 2, 3, 5, 8, 13, 21, 24, ...
*/
const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

/*
Example, (6)
| 0 | 1 | 1 | 2 | 3 | 5 | 8 |
*/
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
