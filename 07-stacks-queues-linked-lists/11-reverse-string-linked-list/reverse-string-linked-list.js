const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  const ll=new LinkedList

  for(let i=str.length-1;i>=0;i--){
    ll.add(str[i])
  }
  let reverseString=""
  let current=ll.head
  while(current!=null){
    reverseString+=current.data
    current=current.next
  }
  return reverseString
}

module.exports = reverseStringLinkedList;
