// queue
const breathFirstSearch = (graph, source, target) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

breathFirstSearch(graph, 'a'); // a b c d e f
