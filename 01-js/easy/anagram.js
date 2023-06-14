/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let a = str1;
	let b = str2;
  // Splitting the string according to characters and storing them in an array
	var array_a = a.split('');
	var array_b = b.split('');
  // Sorting the arrays
	var sorted_a= array_a.sort();
	var sorted_b= array_b.sort();
  // if sorted arrays have same lengths and both are exaclty equal they are anagrams else they are not
	if (sorted_a.length == sorted_b.length){
		return JSON.stringify(sorted_a)==JSON.stringify(sorted_b);
  }
  else{
    return false;
  }
}


}

module.exports = isAnagram;
