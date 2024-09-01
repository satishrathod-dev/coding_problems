const n = 12345567;
const res = countDigits(n);
console.log(res);

function countDigits(n) {
  let count = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    count++;

    if (n == 0) {
      return count;
    }
  }
}
