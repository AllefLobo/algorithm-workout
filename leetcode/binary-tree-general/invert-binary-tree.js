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
  console.log(root);
  if (root === undefined) {
    return root;
  }
  let esq = root?.left;
  let dir = root?.right;
  !!esq ? (root.left = invertTree(dir)) : null;
  !!dir ? (root.right = invertTree(esq)) : null;
  return root;
};

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
let root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9)),
);

console.log(invertTree(new TreeNode(1, new TreeNode(2))));
