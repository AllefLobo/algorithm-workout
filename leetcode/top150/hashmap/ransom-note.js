/**
 * Given two strings ransomNote and magazine, return true if 
 * ransomNote can be constructed by using the letters from magazine 
 * and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let solutionLength = ransomNote.length;
  let map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const item = magazine[i];
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const item = ransomNote[i];
    if (map.has(item) && map.get(item) > 0) {
      map.set(item, map.get(item) - 1);
      solutionLength--;
    }

    if (solutionLength === 0) {
      break;
    }
  }
  return solutionLength === 0 ? true : false;
};

console.log(canConstruct("a", "b"));
