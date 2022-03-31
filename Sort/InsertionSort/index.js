/*
Time complexity: O(n^2)
Space complexity: O(1)
*/
var sortArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i;

    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
};

const result = sortArray([5, 1, 1, 2, 0, 0]);
console.log(result);
