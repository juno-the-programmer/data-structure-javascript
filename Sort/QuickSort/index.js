/*
Time complexity: O(nlogn)
Space complexity: O(logn)
Divide and Conquer approach
*/
const pivot = (nums, left, right) => {
  let p = right;
  let j = left;
  let i = left - 1;

  while (j <= p) {
    if (nums[j] < nums[p]) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    } else {
      j++;
    }
  }

  i++;
  [nums[i], nums[p]] = [nums[p], nums[i]];

  return i;
};
const sortArray = (nums, left = 0, right = nums.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(nums, left, right);

    sortArray(nums, left, pivotIndex - 1);
    sortArray(nums, pivotIndex + 1, right);
  }

  return nums;
};

const result = sortArray([5, 1, 1, 2, 0, 0]);
console.log(result);
