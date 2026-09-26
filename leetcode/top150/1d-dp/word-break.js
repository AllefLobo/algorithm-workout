/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    while (count < wordDict.length) {
      let a = s.slice(i, i + wordDict[count].length);
      if (dp[i] && a === wordDict[count]) {
        dp[i + wordDict[count].length] = true;
      }
      count++;
    }
  }
  return dp[s.length];
};

let s = "abcd",
  wordDict = ["a", "abc", "b", "cd"];
console.log(wordBreak(s, wordDict));
