// Have the function LetterCapitalize(str) take the str parameter being
// passed and capitalize the first letter of each word. Words will be
// separated by only one space.

function LetterCapitalize(str) {

  // code goes here
  var temp = str.split(" ");
  var result = [];
  for (i = 0; i < temp.length; i++) {
   	result.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
  }
  return result.join(" ");
}
