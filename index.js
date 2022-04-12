
function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord
}



/* 
function isPalindrome takes in 1 string word as an argument. the function returns true if the string is a palindrome. the function returns false if it is not a palindrome.  
 
input = argument
output = true or false
  if input === palindrome, return true
  if input !== palindrome, return false
 
  make word into an array
  Array.from(word)
 
  put it into a variable
  const arrayOfWord = Array.from(word)
 
  if arrayOfWord === reverse(arrayOfWord), return 'True'
 
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
