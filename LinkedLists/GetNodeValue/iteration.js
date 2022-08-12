/*
Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) {
      return current.val;
    }
    count += 1;
    current = current.next;
  }
  return null;
};

const result = getNodeValue(a, 2); // 'c'
console.log(result);

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
