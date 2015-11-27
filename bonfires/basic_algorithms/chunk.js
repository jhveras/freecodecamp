function chunk(arr, size) {
  var tmp = [];
  var tmpArr = [];
  var count = 1;

  if (size > arr.length) {
    return tmp;
  }

  for (var i = 0; i < arr.length; i++) {
    //console.log("inside loop");

    if (count <= size) {
      //console.log("inside loop if");
      tmp.push(arr[i]);
      count++;
    } else {
      //console.log("inside loop else");
      tmpArr.push(tmp);
      tmp = [];
      tmp.push(arr[i]);
      count = 1;      
    }
  }

  return tmpArr;
}

chunk(["a", "b", "c", "d"], 2);
