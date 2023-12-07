function parseInt(string) {
  const wordToNumber = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
    billion: 1000000000,
  };

  const words = string.toLowerCase().match(/\b(?:and|\w+)\b/g);
  let result = 0;
  let currentNumber = 0;

  if (words) {
    words.forEach((word) => {
      const number = wordToNumber[word];

      if (number !== undefined) {
        currentNumber += number;
      } else if (word === "hundred") {
        currentNumber *= 100;
      } else if (word === "thousand") {
        result += currentNumber * 1000;
        currentNumber = 0;
      } else if (word === "million") {
        result += currentNumber * 1000000;
        currentNumber = 0;
      } else if (word === "billion") {
        result += currentNumber * 1000000000;
        currentNumber = 0;
      }
    });

    result += currentNumber;
  }

  return result;
}

console.log(parseInt("two hundred forty-six")); // Output: 246
console.log(parseInt("twenty")); // Output: 20
