const n = 2.2;
const res = isPrime(n);
console.log(res);

function isPrime(n) {
  if (n <= 1) {
    return "Enter number greater than 1";
  }
  if (n == 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
