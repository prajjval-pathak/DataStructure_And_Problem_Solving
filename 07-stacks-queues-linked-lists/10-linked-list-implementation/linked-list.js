//Node 2parts: data and pointer to next node
class Node {
  constructor(data){
    this.data=data
    this.next=null
  }
}

class LinkedList {
  //Head points to first node of LL and tail to the last
  constructor(){
    this.head=null
    this.tail=null
  }
  //Methode will add a node to end of LL
  add(data){
    const node=new Node(data)
    if(this.head===null){
      this.head=node
    }
    else{
      this.tail.next=node
    }
    this.tail=node
  }
  elementAt(index){
    let current=this.head
    let i=0
    while(i<index){
      current=current.next
      i++
    }
    console.log(current.data)
  }
  insertAt(data,index){

    const node=new Node(data)
    if(index===0){
      node.next=this.head
      this.head=node
    }
    else{
      let current=this.head
      let previous=null
      let i=0
      while(i<index){
        previous=current
        current=current.next
        i++
      }
      previous.next=node
      node.next=current
    }
  }
  removeAt(index){
    if(index===0){
      this.head=this.head.next
    }
    else{
      let current=this.head
      let previous=null
      let i=0
      while(i<index){
        previous=current
        current=current.next
        i++
      }
      current=current.next
      previous.next=current
    }
  }
  printAll(){
    let current=this.head
    while(current!=null){
      console.log(current.data)
      current=current.next
    }
  }
}
const ll=new LinkedList
ll.add(22)
ll.add(44)

ll.insertAt(99,1)
ll.removeAt(1)
ll.printAll()

module.exports = { Node, LinkedList };
