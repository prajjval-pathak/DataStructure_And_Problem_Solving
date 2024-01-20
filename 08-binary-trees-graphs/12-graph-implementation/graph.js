class Graph {
  constructor(){
    this.adjacencyList={}
  }
  addVertex(vertex){
    this.adjacencyList[vertex]=[]
  }
  addEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter((v1)=>v1!==vertex2)
    this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter((v2)=>v2!==vertex1)
  }
  removeVertex(vertex){
    for(const li of this.adjacencyList[vertex]){
      this.removeEdge(vertex,li)
    }
   delete this.adjacencyList[vertex]
  }
  print(){
    for(const node in this.adjacencyList){
      console.log(`${node}--> ${this.adjacencyList[node].join(",")}`)
    }
  }

}

// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };

module.exports = Graph;
