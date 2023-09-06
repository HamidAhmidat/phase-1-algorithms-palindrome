function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("").toLowerCase();
}

/* 
  Add your pseudocode here
 
  1- split the word into an array of letters.
  2- reverse the given array and join it togather not forgetting to lowercase everything.
  3- check if  word is equal to word after splitting and reversing and joining
  4- use the '==' operator because it returns a boolean result
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
