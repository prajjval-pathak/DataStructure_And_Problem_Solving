const Queue = require('./queue');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f
class Node {
  constructor(data){
    this.data=data
    this.left=null
    this.right=null
  }
}
//For Breadth First we start at root node visit it's children in our case b and c then we move down next level and visit children of b and c
function breadthFirstTraversal(root) {
  console.log(root)
  if(!root){
    return []
  }
  const result=[]
  const queue=[]
  queue.push(root)
  while(queue.length>0){
    const ele=queue.shift()

    result.push(ele.data)
    if(ele.left){
      queue.push(ele.left)
    }
    if(ele.right){
      queue.push(ele.right)
    }
  }
   return result
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
