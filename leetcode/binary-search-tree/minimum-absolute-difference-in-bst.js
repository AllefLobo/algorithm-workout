function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let left =
    root.left === null
      ? root.val
      : Math.abs(root.val - getMinimumDifference(root.left));
  let right =
    root.right === null
      ? root.val
      : Math.abs(root.val - getMinimumDifference(root.right));
  console.log(`${left} < ${right} `);
  return left < right ? left : right;
};

// let root = [4, 2, 6, 1, 3];
let a1 = new TreeNode(4);
let a2 = new TreeNode(2);
let a3 = new TreeNode(6);
let a4 = new TreeNode(1);
let a5 = new TreeNode(3);

a1.left = a2;
a1.right = a3;

a2.left = a4;
a2.right = a5;

console.log(getMinimumDifference(a1));
