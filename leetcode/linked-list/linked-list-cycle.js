function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head, a = new Set()) {
  if (head === null || head.val === undefined) {
    return false;
  }
  if (a.has(head)) {
    return true;
  } else {
    a.add(head);
    if (head.next !== null) {
      return hasCycle(head.next, a);
    } else {
      return false;
    }
  }
};

// let head = [3, 2, 0, -4],
let a1 = new ListNode(3);
let a2 = new ListNode(2);
let a3 = new ListNode(0);
let a4 = new ListNode(-4);

a1.next = a2;
a2.next = a3;
a3.next = a4;

//   pos = 1;
a4.next = a2;

console.log(hasCycle(a1));
