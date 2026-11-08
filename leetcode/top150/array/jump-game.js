/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) {
      return false;
    }
    reach = Math.max(reach, i + nums[i]);
  }

  return true;
};

let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
