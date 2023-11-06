function XO(str) {
  const xS = str.toLowerCase().split("x").length - 1;
  const oS = str.toLowerCase().split("o").length - 1;

  return xS === oS ? true : false;
}

console.log(XO("xxxm"));
