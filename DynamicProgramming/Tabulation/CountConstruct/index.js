/*
Write a function countConstruct(target, wordBank) that accepts a 
target string and an array of strings.

The function should return the number of ways that the target can
be constructed by concatenating elements of the wordBank array.

You may reuse elements of wordBank as many times as needed.
*/
const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
};

/*
countConstruct(purple, [purp, p, ur, le, purpl]) -> 2

  0   1   2   3   4   5   6
| 1 | 1 | 0 | 1 | 2 | 1 | 2 |
                          *
  p   u   r   p   l   e
 
m = target
n = wordBank.length

Time Complexity: O(m2n)
Space Complexity: O(m)
*/

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
