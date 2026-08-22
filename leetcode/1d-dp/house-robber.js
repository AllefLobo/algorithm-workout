/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let v = nums;
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < 2) {
      x = nums[i - 1] > nums[i] ? nums[i - 1] : nums[i];
      v[i] = x;
    } else {
      x = nums[i] + v[i - 2] > x ? nums[i] + v[i - 2] : x;
      v[i] = x;
    }
  }
  return x;
};

let nums = [2, 1, 1, 2];
console.log(rob(nums));
