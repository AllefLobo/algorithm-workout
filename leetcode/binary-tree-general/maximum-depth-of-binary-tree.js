function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }

  let esq = root.left === null ? 1 : 1 + maxDepth(root.left);
  let dir = root.right === null ? 1 : 1 + maxDepth(root.right);

  return esq > dir ? esq : dir;
};

// let root = [3, 9, 20, null, null, 15, 7];

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a6 = new TreeNode(15);
let a7 = new TreeNode(7);

a1.left = a2;
a1.right = a3;
a3.left = a6;
a3.right = a7;

console.log(maxDepth(new TreeNode()));
