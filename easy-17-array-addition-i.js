// Coderbyte Easy Question #17 (Array Addition I)
// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr
// and return the string true if any combination of numbers in the array can be
// added up to equal the largest number in the array, otherwise return the
// string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output
// should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty,
// will not contain all the same elements, and may contain negative numbers.

// Method #1
function ArrayAdditionI(arr) {

  // determine max value in array
  var max = Math.max.apply(null, arr);
  // remove max value from array
  arr.splice(arr.indexOf(max),1);

  var sum = 0;
  var letLen = Math.pow(2, arr.length);

  for (i = 0; i < letLen; i++) {
    sum = 0; // reset the sum to zero
    for (j = 0; j < arr.length; j++) {
      if ((i & Math.pow(2,j))) {
        sum += arr[j];
      }
    }
    // check if current sum equals the max value
    if (sum === max) {return true;}
  }
  return false;
}
