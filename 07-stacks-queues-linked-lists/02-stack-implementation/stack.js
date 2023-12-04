class Stack {
  constructor() {
    (this.maxSize = 100), (this.top = -1), (this.stack = []);
  }
  push(value) {
    if (this.isFull()) {
      return false;
    } else {
      this.top++;
      this.stack[this.top] = value;
      return true;
    }
  }
  isFull() {
    console.log(this.maxSize)
    if (this.top === this.maxSize - 1) {

      return true;
    }
    return false;
  }
  isEmpty(){
    if(this.top===-1){
      return true
    }
    return false
  }
  pop(){
    if(!this.isEmpty()){
      this.top--
      return this.stack.pop();
    }
    return false
  }
}

module.exports = Stack;
