const jumpSearch = (arr, target) => {
  const len = arr.length;
  const step = Math.floor(Math.sqrt(len));

  let start = 0;
  let current = step;
  while (arr[Math.min(current, len) - 1] < target) {
    start = current;
    current += step;

    if (start >= len) return -1;
  }

  while (arr[start] < target) {
    start++;
    if (start === Math.min(current, len)) return -1;
  }

  return arr[start] === target ? start : -1;
};

const arr = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
console.log(jumpSearch(arr, 21));
/*
Time Complexity: O(√n)
Space Complexity: O(1)
*/
