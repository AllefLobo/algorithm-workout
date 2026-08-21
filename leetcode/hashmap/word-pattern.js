/**
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between 
a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

    'a' maps to "dog".
    'b' maps to "cat".

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let splittedS = s.split(" ");
  let mapPattern = new Map();
  let mapSplittedS = new Map();

  if (splittedS.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < splittedS.length; i++) {
    const item = splittedS[i];
    if (mapPattern.has(pattern[i])) {
      let mapItem = mapPattern.get(pattern[i]);
      if (mapItem !== item) {
        return false;
      }
    } else if (
      mapSplittedS.has(item) &&
      mapSplittedS.get(item) !== pattern[i]
    ) {
      return false;
    } else {
      mapPattern.set(pattern[i], item);
      mapSplittedS.set(item, pattern[i]);
    }
  }
  return true;
};

console.log(wordPattern("jquery", "jquery"));
