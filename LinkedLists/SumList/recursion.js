/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
The function should return the total sum of all values in the linked list.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

const sumList = (head) => {
  if (head === null) return 0;
  return (head.val += sumList(head.next));
};

const result = sumList(a); // 19
console.log(result);
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
