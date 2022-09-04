/*
Time complexity: O(n^2)
Space complexity: O(1)
*/
const sortArray = (nums) => {
  let swap = true;
  let count = 0;

  while (swap) {
    swap = false;

    for (let i = 0; i < nums.length - count; i++) {
      let j = i + 1;
      if (nums[i] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        swap = true;
      }
    }
    count++;
  }
};

const result = sortArray([5, 1, 1, 2, 0, 0]);
console.log(result);
