const interpolationSearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const range = arr[right] - arr[left];
    const index = right - left;
    const value = target - arr[left];

    if (value < 0) return -1;

    if (!range) {
      return arr[left] === target ? left : -1;
    }

    const middle = left + Math.floor((value * index) / range);
    if (arr[middle] === target) return middle;

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

const arr = [1, 4, 6, 7, 9, 12, 15, 16, 17, 23, 25, 26, 27, 31];
const target = 7;

console.log(interpolationSearch(arr, target));

/*
Time Complexity: O(log2(log2 n)) for the average case, 
and O(n) for the worst case (when items are distributed exponentially)
Space Complexity: O(1)
*/
