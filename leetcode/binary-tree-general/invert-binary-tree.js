function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) {
    return null;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
};

// Input: root = [2,1,3]
// Output: [2,3,1]
let root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

console.log(invertTree(root));
