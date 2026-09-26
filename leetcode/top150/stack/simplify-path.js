/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let v = new Array(path.length).fill("");
  let count = 0;
  for (let i = 0; i < path.length; i++) {
    if (i > 0 && path[i] === "/") {
      if (i === path.length - 1) {
        break;
      }
      if (v[count] === "/.") {
        v[count] = "";
        count = count - 1;
      } else if (v[count] === "/..") {
        v[count] = "";
        count = count - 1 > 0 ? count - 1 : count;
        v[count] = "";
      } else {
        count++;
      }
    }
    v[count] += path[i];
  }
  return v.join("");
};

let path = "/home//foo/";
console.log(simplifyPath(path));
