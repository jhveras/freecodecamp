function reverseString(str) {
  var array = str.split('');
  var str2 = "";

  for (var i = (str.length - 1); i >= 0; i -= 1) {
    str2 += array[i]
  }

  return str2;
}
