/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let k = null;
  let v = null;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    if (map.get(nums[i]) > v) {
      k = nums[i];
      v = map.get(nums[i]);
    }
  }
  return k;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
