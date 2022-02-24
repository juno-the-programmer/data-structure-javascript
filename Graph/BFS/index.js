// queue
const breathFirstSearch = (graph, source, target) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    if (target === current) {
      return true;
    }
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const result = breathFirstSearch(graph, "a", "f");
// true
