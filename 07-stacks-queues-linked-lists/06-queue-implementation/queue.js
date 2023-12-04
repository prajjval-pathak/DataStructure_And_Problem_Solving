class Queue {
  constructor(){
    this.queue=[]
    this.max=100,
    this.head=0
    this.tail=0
  }
  enqueue(val){
   if(isFull(this.queue)){
    return false
   }
   this.queue.unshift()
  }
  isFull(){
    if(this.queue.length>=this.max){return true}
    return false
  }
  isEmpty(){
    if(this.queue.length<=0){return true}
    return false
  }
  dequeue(){}
}

module.exports = Queue;
