function getSum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(getSum([1, 2, 3, 4, 5])); 