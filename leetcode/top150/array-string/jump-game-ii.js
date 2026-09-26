/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let matrix = Array.from({ length: nums.length }, () => Array(nums.length));
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let max = -Infinity;
    while (count <= nums[i]) {
      matrix[i][count] = nums[i + count];
      count++;
    }
  }
  console.log(matrix);
};

let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
