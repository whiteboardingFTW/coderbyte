// Coderbyte Easy Question #19 (Second GreatLow)
// Have the function SecondGreatLow(arr) take the array of numbers stored in arr
// and return the second lowest and second greatest numbers, respectively,
// separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
// output should be 12 98. The array will not be empty and will contain at least
// 2 numbers. It can get tricky if there's just two numbers!

// Method #1
function SecondGreatLow(arr) {
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);
  var temp = [];
  // first check special case if only two numbers
  if (arr.length === 2) {return max + " " + min;}

  // if more than 2 numbers, sort in ascending order, return values
  arr.sort(function(a, b){return a-b});
  for (i = 0; i < arr.length; i++) {
    if (arr[i+1] !== arr[i]) {
      temp.push(arr[i]);
    }
  }
  //return temp;
  return temp[1] + " " + temp[temp.length-2];
}
