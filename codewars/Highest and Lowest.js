function highAndLow(numbers) {
  const nums = numbers.split(" ").map((n) => parseInt(n));

  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
