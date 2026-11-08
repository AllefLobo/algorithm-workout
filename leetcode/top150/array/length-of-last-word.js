/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let a = s.split(/\s/);
  a = a.filter((v) => v.match(/^[a-zA-Zá-úÁ-ÚãõÃÕçÇ]+$/));
  return a[a.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
