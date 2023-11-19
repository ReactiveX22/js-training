function getCount(str) {
  return str.split("").filter((s) => ["a", "e", "i", "o", "u"].includes(s))
    .length;
}

console.log(getCount("abracadabra"));
