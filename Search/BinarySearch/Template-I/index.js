/*
Distinguishing Syntax:
Initial Condition: left = 0, right = length - 1
Termination: left > right
Searching Left: right = mid - 1
Searching Right: left = mid + 1
*/
const binarySearch = (nums, target) => {
  if (nums == null || nums.length == 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};
