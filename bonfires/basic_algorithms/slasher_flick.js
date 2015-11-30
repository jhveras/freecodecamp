function slasher(arr, howMany) {
  // it doesn't always pay to be first

  if (arr.length < 1) {
    return arr;
  }

  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
