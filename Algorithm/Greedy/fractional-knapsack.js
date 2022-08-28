/*
Given the weights and values of N items, put these items in a knapsack of capacity W to 
get the maximum total value in the knapsack. 
In Fractional Knapsack, we can break items for maximizing the total value of the knapsack
*/
/*
Items as (value, weight) pairs 
arr[] = {{60, 10}, {100, 20}, {120, 30}} 
Knapsack Capacity, W = 50
Output: Maximum possible value = 240 
*/
const fractionalKnapsack = (arr, w) => {
  arr.sort((a, b) => b[0] / b[1] - a[0] / a[1]);

  let remainder = w;
  let possibleValue = 0;
  for (let item of arr) {
    const [value, weight] = item;
    if (remainder - weight >= 0) {
      remainder -= weight;
      possibleValue += value;
    } else {
      possibleValue += value * (remainder / weight);
    }
  }
  return possibleValue;
};

const arr = [
  /*value, weight*/
  [120, 30], // 120/30 = 4
  [100, 20], // 100/20 = 5
  [60, 10], // 60/10 = 6
];
const w = 50; // 240
// const arr = [[500, 30]];
// const w = 10; // 166.667
console.log(parseFloat(fractionalKnapsack(arr, w)).toFixed(3));
