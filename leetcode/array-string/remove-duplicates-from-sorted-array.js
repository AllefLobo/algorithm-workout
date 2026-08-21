/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  nums[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[count - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log(nums);
