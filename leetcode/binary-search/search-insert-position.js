/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, inicio = 0, fim = nums.length - 1) {
  let meio = Math.floor((inicio + fim) / 2);
  if (nums[meio] === target) {
    return meio;
  }

  if (nums[meio] > target) {
    if (inicio === fim) {
      return meio <= 0 ? 0 : meio;
    }
    return searchInsert(nums, target, inicio, meio);
  }

  if (nums[meio] < target) {
    if (inicio === fim) {
      return meio + 1;
    }
    return searchInsert(nums, target, meio + 1, fim);
  }
};

let nums = [1, 3, 5, 9],
  target = 10;
console.log(searchInsert(nums, target));
