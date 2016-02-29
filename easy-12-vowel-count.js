// Coderbyte Easy Question #12 (Vowel Count)
// Have the function VowelCount(str) take the str string parameter being passed
// and return the number of vowels the string contains (ie. "All cows eat grass"
// would return 5). Do not count y as a vowel for this challenge.

// Method #1
function VowelCount(str) {

  var vowels = /[aeiou]/i;
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (vowels.test(str[i]) === true) {
      count++;
    }
  }
  return count;

}
