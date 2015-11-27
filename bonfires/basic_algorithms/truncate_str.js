function truncate(str, num) {
  // We are asumming num >= 0

  var tmp = str;

  if (num < str.length) {
    tmp = str.slice(0, (num));

    // if (str.length > 3 && num > 3) {
    if (tmp.length > 3) {
      tmp = tmp.slice(0, -3);
    }

    tmp += "...";
  }

  return tmp;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
