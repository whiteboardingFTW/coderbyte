// Coderbyte Easy Question #22 (Mean Mode)
// Have the function MeanMode(arr) take the array of numbers stored in arr and
// return 1 if the mode equals the mean, 0 if they don't equal each other
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
// The array will not be empty, will only contain positive integers, and will
// not contain more than one mode.

// Method #1
function MeanMode(arr) {

  var sum = 0;
  for (i = 0; i < arr.length; i++) {sum+=arr[i];} // sum all numbers
  var mean = sum/arr.length; // calculate mean
  var count = []; // store counts of each number in array
  var temp = []; // store unique numbers in the array

  // push values onto temp array if they do not exist yet
  // if they already exist, increase the counter for that number
  for (j = 0; j < arr.length; j++) {
    if (temp.indexOf(arr[j]) === -1) {temp.push(arr[j]);count.push(1);}
    else {count[temp.indexOf(arr[j])]++;}
  }

  var max = Math.max.apply(null, count); // determine highest count
  var mode = temp[count.indexOf(max)]; // mode is the number with highest count

  if (mean === mode) {return 1;}
  else {return 0;}
}
