function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root, mirror = root) {
  console.log(root, mirror);
  if (root === null) {
    return true;
  }
  let mirrorEsq = root.right;
  let mirrorDir = root.left;
  console.log(`${root.left.val} === ${mirrorEsq.val}`);
};

// let root = [1, 2, 2, 3, 4, 4, 3];
let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);
console.log(root.left);
console.log(isSymmetric(root.left));
