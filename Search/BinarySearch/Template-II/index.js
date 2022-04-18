/*
Distinguishing Syntax:
Initial Condition: left = 0, right = length
Termination: left == right
Searching Left: right = mid
Searching Right: left = mid + 1
*/
const binarySearch = (nums, target) => {
  if (nums == null || nums.length == 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = left + (right - left) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      right = mid;
    }
  }

  if (left != nums.length && nums[left] == target) return left;
  return -1;
};
