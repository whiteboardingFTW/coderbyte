// Coderbyte Easy Question #6 (Letter Capitalize)
// Have the function LetterCapitalize(str) take the str parameter being
// passed and capitalize the first letter of each word. Words will be
// separated by only one space.

// Method #1
function LetterCapitalize(str) {

  var temp = str.split(" ");
  var result = [];
  for (i = 0; i < temp.length; i++) {
   	result.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
  }
  return result.join(" ");
}
