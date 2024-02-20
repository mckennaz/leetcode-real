// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.
  
var longestPalindrome = function(str) {
    let results = "";
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        let left = i;
        let right = i;
        
        while(left > 0 && str[left - 1] === char) left--;
        
        while(right < str.length && str[right + 1] === char) {
            right++;
            i++;
        }
		
        while(left >=0 && right < str.length - 1 && str[left - 1] === str[right + 1]) {
            left--;
            right++;
        }
        
        if(results.length < (right - left + 1)) results = str.slice(left, right + 1);
    }
    return results;
};
