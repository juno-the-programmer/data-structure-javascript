/*
Write a function, islandCount, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.
*/
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInBound = r >= 0 && r < grid.length;
  const colInBound = c >= 0 && c < grid[0].length;
  if (!rowInBound || !colInBound) return false;

  if (grid[r][c] === 'W') return false;

  const key = r + ',' + c;

  if (visited.has(key)) return false;

  visited.add(key);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  return true;
};

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const result = islandCount(grid); // -> 3
console.log(result);

/*
r = # rows
c = # cols
Time Complexity: O(rc)
Space Complexity: O(rc)
*/
