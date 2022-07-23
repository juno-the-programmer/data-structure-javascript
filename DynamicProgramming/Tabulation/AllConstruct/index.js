/*
Write a function allConstruct(target, wordBank) that accepts a
target string and an array of strings.

The function should return a 2D array containing all of the ways
that the target can be constructed by concatenating elements of the
wordBank array. Each element of the 2D array should represent
one combination that constructs the target.

You may reuse elements of wordBank as many times as needed.
*/
const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombination = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombination);
      }
    }
  }

  return table[target.length];
};

/*
allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c]) -> 
[
    [ab,cd,ef],
    [ab,c,def],
    [abc,def],
    [abcd,ef]
]
   0       1       2         3           4          5         6
| [[]] |  []  | [[ab]] | [ [abc]    | [[abcd]   |  []  | [[abc,def] |
                           [ab,c] ] |  [ab,cd]]           [ab,c,def]
                                                          [abcd,ef]
                                                          [ab,cd,ef]
   a       b       c          d          e         f
  
m = target.length
n = wordBank.length

Time Complexity: ~O(n^m) time
Space Complexity: ~O(n^m) space
Exponential Complexity!
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
console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// []
