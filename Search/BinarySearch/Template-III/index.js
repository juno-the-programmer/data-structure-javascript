/*
Distinguishing Syntax:
Initial Condition: left = 0, right = length - 1
Termination: left + 1 == right
Searching Left: right = mid
Searching Right: left = mid
*/
const binarySearch = (nums, target) => {
  if (nums == null || nums.length == 0) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + (right - left) / 2;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] == target) return left;
  if (nums[right] == target) return right;
  return -1;
};
