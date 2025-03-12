class UnionFind {
  constructor(size) {
    // Time Complexity: O(N)
    this.root = Array.from({ length: size }, (_, i) => i);
  }

  find(x) {
    // Time Complexity: O(1)
    return this.root[x];
  }

  union(x, y) {
    // Time Complexity: O(N)
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.root.length; i++) {
        if (this.root[i] === rootY) {
          this.root[i] = rootX;
        }
      }
    }
  }

  connected(x, y) {
    // Time Complexity: O(1)
    return this.find(x) === this.find(y);
  }
}

// Test Case
const uf = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf.connected(4, 9)); // true
