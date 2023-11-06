// function validatePIN(pin) {
//   const length = pin.length;

//   return (length === 4 || length === 6) && !isNaN(pin);
// }

function validatePIN(pin) {
  const regex = /^(\d{4}|\d{6})$/;

  return pin.match(regex) ? true : false;
}

console.log(validatePIN("-123"));
