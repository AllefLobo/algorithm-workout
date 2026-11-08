/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let min = +Infinity;
  while (end <= nums.length - 1) {
    sum = sum + nums[end];
    while (sum >= target) {
      min = Math.min(min, end - start + 1);
      sum = sum - nums[start];
      start++;
    }
    end++;
  }
  return min === +Infinity ? 0 : min;
};

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
