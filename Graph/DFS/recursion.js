const depthFirstSearch = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstSearch(graph, neighbor);
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

depthFirstSearch(graph, 'a'); // a b d f c e
