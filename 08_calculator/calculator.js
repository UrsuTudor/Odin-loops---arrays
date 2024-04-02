const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, num) => {return total + num} , 0)
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {return total * num} , 1)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
	let smallerInt = []
  for (i = 0; i <= a; i++){
    smallerInt[i] = i;
  }

  let product = 1;
  for (i = 1; i < smallerInt.length; i++){
    product *= smallerInt[i];
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
