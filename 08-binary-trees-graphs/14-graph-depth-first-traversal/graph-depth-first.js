const Stack = require('./stack');

function depthFirstTraversal(graph,start) {
  if(!graph.adjacencyList[start]){
    return  []
  }
  const res=[]
  const stack=[]
  stack.push(start)
  const visited={}
  visited[start]=1
  while(stack.length>=1){
    const ele=stack.pop()
    res.push(ele)
     for(let node of graph.adjacencyList[ele]){
        if(!visited.hasOwnProperty(node)){
          visited[node]=1
          stack.push(node)
        }
     }
    }
    return res
}

module.exports = depthFirstTraversal;
