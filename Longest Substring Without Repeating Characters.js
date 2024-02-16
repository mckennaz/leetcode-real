// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 const lastSeen = {};
 let longest = [0,1];
 let startIdx = 0;

 for(let i=0;i<s.length;i++){
   const char = s[i];
   if( char in lastSeen)  startIdx = Math.max(startIdx, lastSeen[char] + 1);
   if(longest[1]-longest[0] < i+ 1 - startIdx) longest = [startIdx,i+1];
    lastSeen[char] = i;
 }
  return s.slice(longest[0],longest[1]).length;

};
