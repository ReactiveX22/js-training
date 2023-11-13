function duplicateEncode(word) {
  word = word.toLowerCase();
  return word
    .split('')
    .map((a) => {
      return word.indexOf(a) == word.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

console.log(duplicateEncode('Success'));
