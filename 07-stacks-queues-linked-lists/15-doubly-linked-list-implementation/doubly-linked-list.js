function Node(data) {
  this.previous=null
  this.data=data
  this.next=null
}

function DoublyLinkedList() {
  this.head=null
  this.tail=null
  this.length=0

}
DoublyLinkedList.prototype.prepend=function(data){
  const node=new Node(data)
  if(this.head){
    this.head.previous=node
    node.next=this.head
    this.head=node
  }
  else{
    this.head=node
    this.tail=node

  }
  this.length++
}
DoublyLinkedList.prototype.append=function(data){
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
};
DoublyLinkedList.prototype.insertAt=function(index,data){
  if(index===0){
   return this.prepend(data)
  }
  if(index===this.length){
    return this.append(data)
  }
  else{
    const node=new Node(data)
    let current=this.head
    for(let i=0;i<index-1;i++){
      current=current.next
    }
    // console.log("Here"+current.data)
    node.next=current.next
    node.previous=current
    current.next.previous=node
    current.next=node
    this.length++

  }
}
DoublyLinkedList.prototype.get=function(index){
  let i=0
  let current=this.head
  while(i<index){
    current=current.next
    i++
  }
  console.log(current)
  return current
}
DoublyLinkedList.prototype.remove=function(data){
  let current=this.head
  if(!current){
    return
  }

    while(current){

      if(current.data===data){
        if (current=== this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          }
        } 
        else if(current===this.tail){
          this.tail=this.tail.previous
          this.tail.next=null
        }
        else{
          console.log("here")
          current.next.previous=current.previous
          current.previous.next=current.next
        }
        this.length--
        return true
      }
      current=current.next

  }
}
DoublyLinkedList.prototype.printAll=function(){
  let current=this.head
  while(current){
    console.log(current.data)
    current=current.next
  }
}


module.exports = DoublyLinkedList;
