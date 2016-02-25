// Coderbyte Easy Question #1 (First Reverse)
// Have the function FirstReverse(str) take the str parameter
// being passed and return the string in reversed order.

// Method #1
function FirstReverse(str) {

  var temp = [];
  for (i = 0; i < str.length; i++) {
    temp[i] = str[str.length-(i+1)];
  }
  return temp.join("");

}
