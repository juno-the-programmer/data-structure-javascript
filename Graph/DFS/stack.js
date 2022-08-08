// use stack
const depthFirstSearch = (graph, source, target) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

depthFirstSearch(graph, 'a'); // a c e b d f
