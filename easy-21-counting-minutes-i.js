// Coderbyte Easy Question #21 (Counting Minutes I)
// Have the function CountingMinutesI(str) take the str parameter being passed
// which will be two times (each properly formatted with a colon and am or pm)
// separated by a hyphen and return the total number of minutes between the two
// times. The time will be in a 12 hour clock format. For example: if str is
// 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
// output should be 1320.

// Method #1
function CountingMinutesI(str) {

  var timeArray = str.split("-"); // split into two times
  // split into hours and minutes
  var h1 = timeArray[0].split(":")[0];
  var m1 = timeArray[0].split(":")[1];
  var h2 = timeArray[1].split(":")[0];
  var m2 = timeArray[1].split(":")[1];
  // convert minutes string to integer values
  var min1 = parseInt(m1);
  var min2 = parseInt(m2);
  // special case if minutes equals zero
  if (min1 === 0) {min1+=60;h1--;}
  if (min2 === 0) {min2+=60;h2--;}
  // calculate difference in hours and minutes
  var numHrs = h2-h1;
  var numMin = min2-min1;
  // if am/pm for both times are different, add 12 hours
  if (m1[2] !== m2[2]) {numHrs+=12;}
  var res = (numHrs*60)+numMin; // convert to minutes
  // special case if negative value
  if (res <= 0) {res += 1440;}

  return res;
}
