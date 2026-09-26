function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums, inicio = 0, fim = nums.length - 1) {
  let meio = Math.floor((inicio + fim) / 2);

  if (inicio > fim) {
    return null;
  }

  return new TreeNode(
    nums[meio],
    sortedArrayToBST(nums, inicio, meio - 1),
    sortedArrayToBST(nums, meio + 1, fim),
  );
};

let nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
