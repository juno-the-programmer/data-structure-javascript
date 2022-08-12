/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
The function should zipper the two lists together into single linked list by alternating nodes. 
If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.
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
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
x.next = y;
y.next = z;
// x -> y -> z

const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;

  head2.next = zipperLists(next1, next2);
  return head1;
};

let result = zipperLists(a, x);
