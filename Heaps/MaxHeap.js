class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index] >= this.heap[largerChildIndex]) {
        break;
      }

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  printHeap() {
    console.log(this.heap);
  }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
