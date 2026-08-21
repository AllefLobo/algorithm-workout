/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while 
preserving the order of characters. No two characters may map to the same character, 
but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

    Mapping 'e' to 'a'.
    Mapping 'g' to 'd'.

Example 2:

Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped 
to both '2' and '3'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let splittedS = s.split("");
  let splittedT = t.split("");
  let mapS = new Map();
  let mapT = new Map();
  if (splittedS.length !== splittedT.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const itemS = s[i];
    const itemT = t[i];

    if (!mapS.has(itemS)) {
      if (mapT.has(itemT)) {
        return false;
      }
      mapS.set(itemS, itemT);
      mapT.set(itemT, itemS);
    } else {
      if (!mapT.has(itemT)) {
        return false;
      }
      if (mapT.get(itemT) !== itemS) {
        return false;
      }
    }
  }
  return true;
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
