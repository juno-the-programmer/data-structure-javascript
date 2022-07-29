/*
Write a function allConstruct(target, wordBank) that accepts a
target string and an array of strings.

The function should return a 2D array containing all of the ways
that the target can be constructed by concatenating elements of the
wordBank array. Each element of the 2D array should represent
one combination that constructs the target.

You may reuse elements of wordBank as many times as needed.
*/
const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

/*
allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c]) -> 

m = target.length
n = wordBank.length

Time Complexity: O(n^m)
Space Complexity: O(m)
*/

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
/*[
  [ 'abc', 'def' ],
  [ 'ab', 'c', 'def' ],
  [ 'abcd', 'ef' ],
  [ 'ab', 'cd', 'ef' ]
]*/
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
// []
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
/*
[
  [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
  [
    'enter', 'a',
    'p',     'o',
    't',     'ent',
    'p',     'ot'
  ],
  [
    'enter', 'a',
    'p',     'ot',
    'ent',   'p',
    'o',     't'
  ],
  [
    'enter', 'a',
    'p',     'o',
    't',     'ent',
    'p',     'o',
    't'
  ]
]
*/
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])
);
// []
