const convertToCelsius = function(fahrenheit) {
  let tempCelsius = ((fahrenheit - 32) * 5) / 9
  tempCelsius = parseFloat(tempCelsius.toFixed(1))
  //celsius = Math.round(celsius * 10) / 10
  return tempCelsius
};

const convertToFahrenheit = function(celsius) {
  let tempFahrenheit = (celsius * 9) /5 + 32
  tempFahrenheit = parseFloat (tempFahrenheit.toFixed(1))
  return tempFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
