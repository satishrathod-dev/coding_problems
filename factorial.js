const n = 10;
const res = factorial(n);

function factorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
