function sumAll(num1, num2) {
  let sum = 0;
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll(1, 5)); // Output: 15 (1 + 2 + 3 + 4 + 5)