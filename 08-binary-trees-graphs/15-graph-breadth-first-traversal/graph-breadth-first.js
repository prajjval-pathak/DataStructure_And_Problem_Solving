const Queue = require('./queue');

function breadthFirstTraversal(g,startingNode) {
  if(!startingNode){
    return []
  }
  const visited={}
  const queue=[]
  const res=[]
  queue.push(startingNode)
  visited[startingNode]=1
  while(queue.length>=1){
    const ele=queue.shift()
    res.push(ele)
    for(const vertex of g.adjacencyList[ele]){
      if(!visited.hasOwnProperty(vertex)){
        visited[vertex]=1
        queue.push(vertex)
      }
    }
  }
  return res
}

module.exports = breadthFirstTraversal;
