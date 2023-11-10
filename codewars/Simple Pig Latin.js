function pigIt(str) {
  return str
    .split(' ')
    .map((x) => {
      return /[a-zA-Z]+/.test(x) ? x.slice(1) + x[0] + 'ay' : x;
    })
    .join(' ');
}
console.log(pigIt('Pig latin is cool'));
