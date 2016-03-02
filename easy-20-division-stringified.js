// Coderbyte Easy Question #20 (Division Stringified)
// Have the function DivisionStringified(num1,num2) take both parameters being
// passed, divide num1 by num2, and return the result as a string with properly
// formatted commas. If an answer is only 3 digits long, return the number with
// no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
// and num2 is 10000 the output should be "12,346".

// Method #1
function DivisionStringified(num1,num2) {

  var x = num1 / num2;	// carry out division
  var y = Math.round(x); // round to nearest integer
  var temp = y.toString(); // store as array of integers
  var temp2 = []; // store reverse array with commas
  var temp3 = []; // store forward array with commas
  var count = 0; // keeps track of number of digits
  for (i = temp.length-1; i >= 0; i--) {
    count++;
    temp2.push(temp[i]); // pushes last integer to front of array
    // add a comma for every 3 digits, until last digit is added
    if (count % 3 === 0 && count !== temp.length) {
      temp2.push(",");
    }
  }
  // push the integers back to their correct order
  for (j = temp2.length-1; j >= 0; j--) {
    temp3.push(temp2[j]);
  }
  return temp3.join("");
}
