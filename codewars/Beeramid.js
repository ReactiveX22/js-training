/*function beeramid(bonus, price) {
  let noOfBeers = bonus / price;

  let levels = 0;
  let sqr = 1;
  let remains = noOfBeers;

  while (remains - Math.pow(sqr, 2) >= 0) {
    remains = remains - Math.pow(sqr, 2);
    sqr++;
    levels++;
  }

  return levels;
}
*/

function beeramid(bonus, price) {
  let levels = 0;

  while (bonus >= Math.pow(levels + 1, 2) * price) {
    bonus -= Math.pow(levels + 1, 2) * price;
    levels++;
  }

  return levels;
}

console.log(beeramid(10, 2));
