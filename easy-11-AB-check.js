// Coderbyte Easy Question #11 (AB Check)
// Have the function ABCheck(str) take the str parameter being passed and return
// the string true if the characters a and b are separated by exactly 3 places
// anywhere in the string at least once (ie. "lane borrowed" would result in
// true because there is exactly three characters between a and b). Otherwise
// return the string false.

// Method #1
function ABCheck(str) {

  var a = []; // array of all indices of a
	for (i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        a.push(i);
      }
    }
  	for (j = 0; j < a.length; j++) {
      if (str[a[j]-4] === 'b' || str[a[j]+4] === 'b') {
        return true;
      }
    }
	return false;
}
