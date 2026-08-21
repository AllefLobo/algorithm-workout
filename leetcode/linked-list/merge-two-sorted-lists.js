function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2, a = new ListNode()) {
  if (list1 === null || list2 === null) {
    return a;
  }
  if (list1.val < list2.val) {
    a.val = list2;
    a.next = mergeTwoLists(list1.next, list2);
  } else {
    a.val = list1;
    a.next = mergeTwoLists(list1, list2.next);
  }

  return a;
};

// let list1 = [1, 3, 4],
// list2 = [1, 3, 4];

let a11 = new ListNode(1);
let a12 = new ListNode(2);
let a13 = new ListNode(4);
a11.next = a12;
a12.next = a13;

let a21 = new ListNode(1);
let a22 = new ListNode(3);
let a23 = new ListNode(4);
a21.next = a22;
a22.next = a23;

console.log(mergeTwoLists(a11, a21));
