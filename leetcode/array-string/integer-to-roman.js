/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (nums) {
  let map = new Map();
  map.set(1, "I");
  map.set(5, "V");
  map.set(10, "X");
  map.set(50, "L");
  map.set(100, "C");
  map.set(500, "D");
  map.set(1000, "M");
  let r = [1000, 500, 100, 50, 10, 5, 1];
  let v = "";
  let count = 0;
  while (count < r.length) {
    if (nums - r[count] >= 0) {
      let a = nums / r[count];

      v += map.get(r[count]);
      nums -= r[count];
      console.log(nums, r[count], v);
    } else {
      count++;
    }
  }
  return v;
};

let nums = 3749;
console.log(intToRoman(nums));
