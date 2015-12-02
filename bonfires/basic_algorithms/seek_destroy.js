function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);

  function exists(a) {
    var bool = true;
    //console.log(args);
    //console.log("length = " + args.length);

    for (var i = 1; i < args.length; i++) {
      //console.log("a = " +  a);
      //console.log("args[" + i + "] = " + args[i]);

      if (args[i] === a) {
        //console.log(a + " equals " + args[i]);
        bool = false;
      }
    }

    //console.log(bool);
    return bool;
  }

  arr = arr.filter(exists);

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
