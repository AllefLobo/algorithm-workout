/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  let a = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      a.push(s[i]);
    } else if (map.get(a[a.length - 1]) === s[i]) {
      a.pop();
    } else {
      count++;
    }
  }
  return a.length === 0 && count === 0 ? true : false;
};

let s = ")(";
console.log(isValid(s));
