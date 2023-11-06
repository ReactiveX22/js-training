function openOrSenior(data) {
  let result = [];
  data.map((member) => {
    member[0] >= 55 && member[1] > 7
      ? result.push("Senior")
      : result.push("Open");
  });

  return result;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
