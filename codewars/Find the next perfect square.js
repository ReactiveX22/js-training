function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  const sqrtOfsq = Math.sqrt(sq);
  return Number.isInteger(sqrtOfsq) ? Math.pow(sqrtOfsq + 1, 2) : -1;
}

findNextSquare(121);
