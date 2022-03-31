/*
Time complexity: O(n^2)
Space complexity: O(1)
*/
var sortArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }

    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
  }
  return nums;
};

const result = sortArray([5, 1, 1, 2, 0, 0]);
console.log(result);
