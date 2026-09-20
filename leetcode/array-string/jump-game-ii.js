/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let reach = 0;
  let v = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) {
      return 0;
    }
    console.log(reach, i, nums[i]);
    if (i + nums[i] > reach) {
      reach = i + nums[i];
      v++;
    }
  }

  return v;
};

let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
