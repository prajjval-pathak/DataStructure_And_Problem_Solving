const Stack = require('./stack');

function depthFirstTraversal(graph,start) {
  if (!graph.adjacencyList[start]) {
    return [];
  }
  const res=[]
  const stack=[]
  const visited={}
  stack.push(start)
  visited[start]=true
  while(stack.length>0){
    const currentVertex=stack.pop()
    res.push(currentVertex)
    graph.adjacencyList[currentVertex].forEach((item)=>{if(!visited[item]){
        stack.push(item)
        visited[item]=true
  }})
  }
  return res
}

module.exports = depthFirstTraversal;
