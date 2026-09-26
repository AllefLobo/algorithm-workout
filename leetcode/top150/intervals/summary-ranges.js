/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let solution = [];
  let count = [];
  for (let i = 0; i < nums.length; i++) {
    if (count.length === 0) {
      count.push(nums[i]);
    }

    if (nums[i] - 1 === count[count.length - 1]) {
      count.push(nums[i]);
    }

    if (nums[i] + 1 !== nums[i + 1]) {
      let a =
        count[0] !== count[count.length - 1]
          ? `${count[0]}->${count[count.length - 1]}`
          : count[0].toString();
      solution.push(a);
      count = [];
    }
  }
  return solution;
};

let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
