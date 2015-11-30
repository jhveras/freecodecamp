function mutation(arr) {
  var bool = true;
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();

  if (arr.length != 2) {
    return false;
  }

  for (var i = 0; i < str2.length; i++) {
    // console.log(str1[i]);

    if (str1.indexOf(str2[i].toLowerCase()) === -1) {
      return false;
    }
  }

  return bool;
}

mutation(["hello", "hey"]);
