// Coderbyte Easy Question #9 (Time Convert)
// Have the function TimeConvert(num) take the num parameter being passed and
// return the number of hours and minutes the parameter converts to (ie. if num
// = 63 then the output should be 1:3). Separate the number of hours and minutes
// with a colon.

// Method #1
function TimeConvert(num) {

  var h = Math.floor(num / 60);
  var m = num % 60;
  return h + ":" + m;

}
