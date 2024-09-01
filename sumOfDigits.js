const n = 12345;
const res = sumOfDigits(n);

function sumOfDigits(n) {
  let sum = 0;
  while (n != 0) {
    let temp = n % 10;
    sum += temp;
    n = Math.floor(n / 10);
  }
  console.log(sum);
}
