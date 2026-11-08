/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let farthest = 0;
  let currentEnd = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (currentEnd === i) {
      currentEnd = farthest;
      jumps++;
    }
  }
  return jumps;
};

let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
