/**Given two strings s and t, return true if t is an of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false */
var isAnagram = function (s, t) {
  const mapS = new Map();
  const mapT = new Map();
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i])) {
      mapS.set(s[i], mapS.get(s[i]) + 1);
    } else {
      mapS.set(s[i], 1);
    }

    if (mapT.has(t[i])) {
      mapT.set(t[i], mapT.get(t[i]) + 1);
    } else {
      mapT.set(t[i], 1);
    }
  }

  const [mapA, mapB] = mapS.size <= mapT.size ? [mapS, mapT] : [mapT, mapS];

  for ([k, v] of mapA) {
    if (mapB.get(k) !== v) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("a", "a"));
