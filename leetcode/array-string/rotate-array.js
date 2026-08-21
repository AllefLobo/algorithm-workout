/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === nums.length) {
    return;
  }
  k = Math.floor(k % nums.length);
  nums.reverse();
  let a = nums.slice(0, k).reverse();
  let b = nums.slice(k).reverse();
  a = a.concat(b);
  console.log(a);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i];
  }
};
