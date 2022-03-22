const permutations = (elements) => {
    if (elements.length === 0) return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const permsWithoutFirst = permutations(rest);

    const allPermutations = [];

    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    });

    return allPermutations;
};

// Time: O(n!)
// Space: O(n*n)

console.log(permutations(["a", "b", "c"]))
/*
[
  [ 'a', 'b', 'c' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'c', 'a' ],
  [ 'a', 'c', 'b' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'b', 'a' ]
]
*/