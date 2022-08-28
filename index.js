function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
compare the letter we're iterating over to the corresponding letter at the end of the string
if the letters don't match, return false
if we reach the middle, and all the letters match, return true

*/
/*
  Add written explanation of your solution here
   First declare a function isPalindrome that passes an argument called word.
  Inside the function you define a for loop iteration that declares a variable startIndex, gives it a condition that defines the variable should be less than the half of the word length, and the loop should run until the condition is fully satisfied.
  We declare an endIndex variable that is set to the word length minus 1 and the startIndex.
  Then we declare an if statement that if startIndex is not equal to endIndex return false.
  If the for loop is satisfied, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

}


module.exports = isPalindrome;
module.exports = isPalindrome;
