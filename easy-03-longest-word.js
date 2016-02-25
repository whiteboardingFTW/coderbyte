// Coderbyte Easy Question #3 (Longest Word)
// Have the function LongestWord(sen) take the sen parameter being
// passed and return the largest word in the string. If there are
// two or more words that are the same length, return the first word
// from the string with that length. Ignore punctuation and assume sen
// will not be empty.

// Method #1
function LongestWord(sen) {

  // split sentence into individual words
  var strArray = sen.split(" ");
  var longWord = [];
  // used to check for non-alphabet characters
  var para = /[^A-Z0-9]/i;
  for (i = 0; i < strArray.length; i++) {
    // check that the word only contains letters
    if (para.test(strArray[i]) === false) {
      // check if word is longer than the reigning longest word
      if (strArray[i].length > longWord.length) {
        longWord = strArray[i]
      }
    }
  }
  return longWord;

}
