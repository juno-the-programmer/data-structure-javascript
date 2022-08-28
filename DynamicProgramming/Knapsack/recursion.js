const knapsack = (items, capacity) => {
  const optimum = (k, availableCapacity) => {
    // base case
    if (k < 0) return 0;

    const withoutCurrItem = optimum(k - 1, availableCapacity);
    let withCurrItem = 0;
    const currWeight = items[k][1];
    const currValue = items[k][0];

    if (availableCapacity < currWeight) {
      withCurrItem = 0;
    } else {
      withCurrItem = currValue + optimum(k - 1, availableCapacity - currWeight);
    }

    return Math.max(withoutCurrItem, withCurrItem);
  };

  return optimum(items.length - 1, capacity);
};

const items = [
  [60, 5],
  [50, 3],
  [70, 4],
  [30, 2],
];

const result = knapsack(items, 5);
console.log(result);
