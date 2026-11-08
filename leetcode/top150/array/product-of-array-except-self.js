/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let v = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    v[i] = prefix;
    prefix = prefix * nums[i];
  }

  let sufix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    v[i] = v[i] * sufix;
    sufix = sufix * nums[i];
  }

  return v;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
