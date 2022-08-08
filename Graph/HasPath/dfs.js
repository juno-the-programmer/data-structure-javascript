const hasPath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

console.log(hasPath(graph, 'f', 'k'));
