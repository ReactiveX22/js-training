var countBits = function (n) {
  return n.toString(2).split('0').join('').length;
};

// console.log(countBits(1234));
console.log(countBits(1234));
