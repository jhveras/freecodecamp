function chunk(arr, size) {
  var tmp = [];
  var tmpArr = [];
  var count = 1;

  if (size > arr.length) {
    return tmp;
  }

  for (var i = 0; i < arr.length; i++) {
    //console.log("inside loop");

    tmp.push(arr[i]);

    if ((count % size) === 0) {
      //console.log("inside loop if");
      tmpArr.push(tmp);
      tmp = [];
    } else {
      if (i === (arr.length - 1)) {
        tmpArr.push(tmp);
      }
    }

    count++;
  }

  return tmpArr;
}

chunk(["a", "b", "c", "d"], 2);
