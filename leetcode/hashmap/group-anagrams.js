/**Given an array of strings strs, group the together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]*/
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let a = strs[i].split("").sort().join("");
    if (map.has(a)) {
      map.get(a).push(strs[i]);
    } else {
      map.set(a, [strs[i]]);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
