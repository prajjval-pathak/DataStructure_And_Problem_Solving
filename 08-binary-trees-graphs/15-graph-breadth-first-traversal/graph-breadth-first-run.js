const Graph = require('./graph');
const breadthFirstTraversal = require('./graph-breadth-first');

const g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addEdge('Tokyo', 'Dallas');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Tokyo', 'Aspen');


g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addVertex('G');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');
g.addEdge('C', 'G');
// g.removeEdge('Dallas', 'Aspen');
// g.removeVertex('Aspen');

console.log(breadthFirstTraversal(g, 'A'));
