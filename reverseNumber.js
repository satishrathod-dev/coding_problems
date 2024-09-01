const n = 1234;
const res = reverseNumber(n);

console.log(n.reverse());
// console.log(res);

function reverseNumber(n) {
  let rev = 0;
  while (n != 0) {
    // console.log(n);
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  //   console.log(rev);
  return rev;
}
