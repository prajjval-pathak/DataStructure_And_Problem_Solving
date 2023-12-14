/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const node=new ListNode(0)
  node.next=head
  let slow=node
  let fast=head
  while(n>0 && fast){
      fast=fast.next
      n--
  }

  while(fast){
      slow=slow.next
      fast=fast.next

  }
  slow.next=slow.next.next
  return node.next
};
