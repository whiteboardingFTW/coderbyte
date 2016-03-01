// Coderbyte Easy Question #15
// Have the function Palindrome(str) take the str parameter being passed and
// return the string true if the parameter is a palindrome, (the string is the
// same forward as it is backward) otherwise return the string false. For
// example: "racecar" is also "racecar" backwards. Punctuation and numbers will
// not be part of the string.

// Method #1
function Palindrome(str) {

  // remove all whitespace from string
  var temp = str.replace(/[ ]/g, "");
  // create empty array to store reverse string
  var rev = [];
  // create the reverse string
  for (i = temp.length-1; i >= 0; i--) {
    rev.push(temp[i]);
  }
  // compare reverse and forward strings
  if (rev.join("") === temp) {
    return true;
  }
  return false;

}
