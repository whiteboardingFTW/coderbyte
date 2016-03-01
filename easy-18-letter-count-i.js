// Coderbyte Easy Question #18 (Letter Count I)
// Have the function LetterCountI(str) take the str parameter being passed and
// return the first word with the greatest number of repeated letters. For
// example: "Today, is the greatest day ever!" should return greatest because it
// has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
// are no words with repeating letters return -1. Words will be separated by spaces.

// Method #1
function LetterCountI(str) {

  var wordsArray = str.split(" ");  // split str into individual words
  var counts = []; // tracks number of repeats for each word

  // outer loop selects the word to be searched
  for (i = 0; i < wordsArray.length; i++) {
    var count = 0; // tracks current count
    var temp = []; // stores letters of the current word being searched
    // inner loop scans each letter of the current word
    for (j = 0; j < wordsArray[i].length; j++) {
      temp.push(wordsArray[i][j]);  // push current letter onto temp
      // if current letter already exists, increase count for this word
      if (temp.indexOf(wordsArray[i][j+1]) !== -1) {
        count++; // tracks number of repeating letters for word i
      }
      counts[i] = count; // store total count for word i
    }
  }
  // determine index of word with highest repeats, return it
  var maxCount = Math.max.apply(null, counts);
  if (maxCount === 0) {return -1;} // if no repeats, return -1
  return wordsArray[counts.indexOf(maxCount)];
}
