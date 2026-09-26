function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {};

let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));

console.log(sortList(head));
