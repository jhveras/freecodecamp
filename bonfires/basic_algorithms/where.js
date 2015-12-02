function where(arr, num) {
  // Find my place in this sorted array.
  var i = 0;
  arr = arr.sort(
    function compare(a, b) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    }
  );

  while ((num > arr[i]) && (i < arr.length)) {
    i++;
  }

  return i;
}

where([40, 60], 50);
