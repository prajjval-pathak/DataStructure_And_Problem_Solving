var reverseList = function(head) {
  let current=head
  let previous=null
  let next
  while(current){
      next=current.next//2
      current.next=previous//null
      previous=current//1
      current=next//2
  }

  return previous
};
