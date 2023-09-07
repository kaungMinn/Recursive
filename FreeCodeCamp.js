function findFactorial(num) {
  if (num === 0) return 1;
  let factorial = num * findFactorial(num - 1);
  return factorial;
}
console.log(findFactorial(5));
