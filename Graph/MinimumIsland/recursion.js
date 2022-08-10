/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.
You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid) => {
  const visited = new Set();
  let minCount = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minCount) {
        minCount = size;
      }
    }
  }

  return minCount;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInBound = r >= 0 && r < grid.length;
  const colInBound = c >= 0 && c < grid[0].length;
  if (!rowInBound || !colInBound) return 0;

  if (grid[r][c] === 'W') return 0;

  let key = r + ',' + c;
  if (visited.has(key)) return 0;
  visited.add(key);

  let size = 1;

  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const result = minimumIsland(grid); // -> 2
console.log(result);
/*
r = # rows
c = # cols
Time Complexity: O(rc)
Space Complexity: O(rc)
*/
