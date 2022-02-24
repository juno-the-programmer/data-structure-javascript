// use stack
const depthFirstSearch = (graph, source, target) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    if (target === current) {
      return true;
    }
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
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

const result = depthFirstSearch(graph, "a", "f");
// true
