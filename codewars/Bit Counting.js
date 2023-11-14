var countBits = function (n) {
  return n.toString(2).split('0').join('').length;
};

// console.log(countBits(1234));
console.log(countBits(1234));

// O(1)

function countBits1(n) {
  if (n == 0) return 0;
  else return (n & 1) + countBits1(n >> 1);
}
console.log(countBits1(1234));
