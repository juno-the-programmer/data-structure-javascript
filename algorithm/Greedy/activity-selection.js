/*
Given n activities with their start and finish times.
Select the maximum number of activities that can be performed
by a single person, assuming that a person can only work
on a single activity at a time.

Greedy Approach
1. Sort the activities according to their finishing time
2. Select the first activity from the sorted array and print it
3. Do following for remaining activities in the sorted array.
   - If the start time of this activity is greather than or equal to
     the finish time of previously selected activity then select 
     this activity and print it.
*/

const maxActivities = (start, finish) => {
  let n = start.length;
  let i = 0;
  let activities = [i];
  for (let j = 1; j < n; j++) {
    if (start[j] >= finish[i]) {
      activities.push(j);
      i = j;
    }
  }
  return activities;
};

let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
// answer : [0, 1, 3, 4]

// let s = [10, 12, 20];
// let f = [20, 25, 30];
// // answer: [0,2]

console.log(maxActivities(s, f));
