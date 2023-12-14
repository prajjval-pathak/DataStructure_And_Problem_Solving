var hasCycle = function(head) {
  const ma=new Map
  curr=head
  while(curr) {
      if(ma.has(curr)){
          return true
      }
      ma.set(curr,curr.val)
      curr=curr.next
  }
  return false
};
