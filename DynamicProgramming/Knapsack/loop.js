const knapsack = (W, wt, val, n) => {
  let table = new Array(n + 1);

  for (let row = 0; row <= n; row++) {
    table[row] = new Array(W + 1);
    for (let col = 0; col <= W; col++) {
      if (row == 0 || col == 0) {
        table[row][col] = 0;
      } else if (wt[row - 1] <= col) {
        table[row][col] = Math.max(
          val[row - 1] + table[row - 1][col - wt[row - 1]],
          table[row - 1][col],
        );
      } else {
        table[row][col] = table[row - 1][col];
      }
    }
  }
  return table[n][W];
};
let val = [60, 50, 70, 30];
let wt = [5, 3, 4, 2];
let W = 5;
let n = val.length;
const result = knapsack(W, wt, val, n);
console.log(result);
/*
  [60, 5],
  [50, 3],
  [70, 4],
  [30, 2],

   0 1 2 3 4 5
  ------------
0| 0
1|
2|
3|

*/
