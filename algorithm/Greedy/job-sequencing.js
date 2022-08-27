/*
Given an array of jobs where every job has a deadline and associated profit if the job is 
finished before the deadline. 
It is also given that every job takes a single unit of time, 
so the minimum possible deadline for any job is 
1. Maximize the total profit if only one job can be scheduled at a time.

Greedy Approach
1. Sort all jobs in decreasing order of profit. 
2. Iterate on jobs in decreasing order of profit.For each job , do the following : 
3. Find a time slot i, such that slot is empty and i < deadline and i is greatest.Put the job in 
    this slot and mark this slot filled. 
    If no such i exists, then ignore the job. 
*/
const jobSequence = (arr, t) => {
  arr.sort((a, b) => b[2] - a[2]);

  let result = []; // keep track of free time slots

  let job = []; // store result (sequence of jobs)

  for (let i = 0; i < t; i++) {
    job[i] = '-1';
    result[i] = false;
  }

  // iterate through all given jobs
  for (let i = 0; i < arr.length; i++) {
    for (let j = (t - 1, arr[i][1] - 1); j >= 0; j--) {
      if (result[j] === false) {
        result[j] = true;
        job[j] = arr[i][0];
        break;
      }
    }
  }

  return job;
};
// const arr = [
//   ['a', 2, 100],
//   ['b', 1, 19],
//   ['c', 2, 27],
//   ['d', 1, 25],
//   ['e', 3, 15],
// ];
const arr = [
  ['a', 4, 20],
  ['b', 1, 10],
  ['c', 1, 40],
  ['d', 1, 30],
];
const result = jobSequence(arr, 2);
console.log(result);
/*
Time Complexity: O(N^2)
Space Complexity: O(N)
*/
