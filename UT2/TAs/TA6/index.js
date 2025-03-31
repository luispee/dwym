function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

console.log(convertToCelsius(100)); // 37.78