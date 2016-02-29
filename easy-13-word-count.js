// Coderbyte Easy Question #13 (Word Count)
// Have the function WordCount(str) take the str string parameter being passed
// and return the number of words the string contains (ie. "Never eat shredded
// wheat" would return 4). Words will be separated by single spaces.

// Method #1
function WordCount(str) {

  return str.split(" ").length;

}
