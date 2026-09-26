/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let v = digits.join("");
  let a = BigInt(v) + BigInt(1);
  a = a
    .toString()
    .split("")
    .map((value) => Number.parseInt(value));

  return a;
};

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits));
