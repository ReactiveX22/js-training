function maxSequence(arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
