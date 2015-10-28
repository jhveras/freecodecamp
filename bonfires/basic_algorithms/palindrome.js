function palindrome(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var tmp = "";

  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase();

  // stripping str of non alphabet characters
  for (var i = 0; i < str.length; i++){
    var c = str.charAt(i);

    if (alphabet.indexOf(c) > -1) {
      tmp += c;
    } else {
      if (!isNaN(parseInt(c))) {
        tmp += c; // Including numbers
      }
    }
  }

  str = tmp;
  tmp = "";

  // Reversing the string
  for (var i = (str.length - 1); i >= 0; i -= 1) {
    tmp += str.charAt(i);
  }

  return tmp === str;
}

palindrome("eye");
