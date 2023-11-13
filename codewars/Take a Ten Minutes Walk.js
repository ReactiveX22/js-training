function isValidWalk(walk) {
  const northSouth =
    walk.filter((item) => item === 'n').length -
    walk.filter((item) => item === 's').length;
  const eastWest =
    walk.filter((item) => item === 'e').length -
    walk.filter((item) => item === 'w').length;

  return walk.length === 10 && northSouth === 0 && eastWest === 0;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
