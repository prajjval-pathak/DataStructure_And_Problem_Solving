function findMiddle(list) {
  let slow=list.head
  let fast=list.head
  while(fast!==null && fast.next!==null){
    fast=fast.next.next
    slow=slow.next
  }
}

module.exports = findMiddle;


// 1 2 3 4 5 
