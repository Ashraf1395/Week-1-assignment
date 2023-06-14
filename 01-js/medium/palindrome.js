/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var a = str.toLowerCase();
  var reverse='';
  for(var i =a.length; i>=0;i--){
    reverse=reverse+a[i];
  }
  reverse=reverse.substring(9,reverse.length);
  //console.log(reverse);
  return a==reverse;
}

module.exports = isPalindrome;
