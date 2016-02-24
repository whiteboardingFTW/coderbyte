// Have the function LetterChanges(str) take the str parameter being
// passed and modify it using the following algorithm. Replace every
// letter in the string with the letter following it in the alphabet
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this
// new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {

  var myArray = []; // will hold the modified string
  var alpha = /[A-Z ]/i; // to check for alphabetical characters
  var vowels = /[aeiou]/; // to check for vowels
  for (i = 0; i < str.length; i++) {
    // check that character is a letter AND not a space
    if (alpha.test(str[i]) === true && str[i] !== " ") {
      // convert character to unicode
      var temp = str.charCodeAt(i);
      // special case if character is z or Z
      if (temp === 122 || temp === 90) {
			myArray[i] = 'a';
      }
      else {
      // convert back to alphabet using unicode + 1
      	myArray[i] = String.fromCharCode(temp+1);
      }
      // if new letter is a vowel, then capitalize
      if (vowels.test(myArray[i]) === true) {
        myArray[i] = myArray[i].toUpperCase();
      }
  	}
    // Do NOT change non-alphabet characters or whitespaces
    else {
      myArray[i] = str[i];
    }
  }
  return myArray.join("");

}
