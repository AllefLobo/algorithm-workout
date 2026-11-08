/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let subPath = path.split("/");
  let a = [];
  for (let i = 0; i < subPath.length; i++) {
    switch (subPath[i]) {
      case ".":
        break;
      case "":
        break;
      case "..":
        if (a.length > 0) {
          a.pop();
        }
        break;
      default:
        a.push(subPath[i]);
        break;
    }
  }
  return "/" + a.join("/");
};

let path = "/home//foo/";
console.log(simplifyPath(path));
