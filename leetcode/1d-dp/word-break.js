/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict);

  let dp = new Array();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let word = s.substring(count, i);
    console.log(word);
    if (set.has(word)) {
      count = i + 1;
      dp[i] = true;
    } else {
      dp[i] = false;
    }
  }
  console.log(dp);
  return dp[s.length - 1];
};

let s = "ab",
  wordDict = ["a", "ab"];
console.log(wordBreak(s, wordDict));
