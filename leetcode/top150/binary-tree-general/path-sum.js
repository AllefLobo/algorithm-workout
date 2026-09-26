function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === undefined || root === null) return false;
  if (root.left === null && root.right === null) {
    return targetSum - root.val === 0;
  }
  let esq = hasPathSum(root.left, targetSum - root.val);
  let dir = hasPathSum(root.right, targetSum - root.val);
  return esq || dir;
};

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let targetSum = 3;

console.log(root);
console.log(hasPathSum(root, targetSum));
