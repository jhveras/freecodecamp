function repeat(str, num) {
  // repeat after me
  var tmp = "";

  if (num < 0) {
    return "";
  }

  for (var i = 0; i < num; i++) {
    tmp += str;
  }

  return tmp;
}

repeat("abc", 3);
