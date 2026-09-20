function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root, min = Infinity) {
  if (root === null || root === undefined) min;
  if (root.esq === null || root.right) return root.val;

  let minEsq = Math.abs(root.val - root.left.val);
  let minDir = Math.abs(root.val - root.right.val);

  min = minEsq < min ? minEsq : min;
  min = min < minDir ? minDir : min;
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

console.log(a4);
console.log(getMinimumDifference(a4));
