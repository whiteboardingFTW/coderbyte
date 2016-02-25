// Coderbyte Easy Question #10 (Alphabet Soup)
// Have the function AlphabetSoup(str) take the str string parameter being
// passed and return the string with the letters in alphabetical order (ie.
// hello becomes ehllo). Assume numbers and punctuation symbols will not be
// included in the string.

// Method #1 (adapted from https://10tothe4hours.wordpress.com/)
function AlphabetSoup(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var indices = [];
    for (var i = 0; i < str.length; i++) {
      	// determine the number letter of alphabet of each char in str
      	// push index onto array for storage
    	indices.push(alphabet.indexOf(str[i]));
    }
  	// sort indices in descending order
    indices.sort(function(a,b) {return b-a});
  	// translate indices back into chars starting with lowest index
  	//
    while (indices.length > 0) {
    	string += alphabet.charAt(indices.pop());
    }
    return string;
}
