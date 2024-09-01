// for (let i = 2; i <= 10; i++) {
//   let count = 0;
//   if (i % (i + 1)) {
//     count++;
//     break;
//   }

// for (let j = 1; j <= 50; j++) {
//   if (i % j == 0) {
//     //   console.log(j);
//     count++;
//   }
//   if (count > 2) {
//     console.log(j);
//     break;
//   }
// }
// if (count <= 2) {
//   // console.log(i);
// }

// let i = 2;
// let j = i + 1;
// let count = 0;

// while (i >= 10) {
//   if (i % j == 0) {
//     count++;
//   }
//   if (count > 2) {
//     break;
//   }
//   i++;
//   j++;
// }

// if (count < 2) {
//   console.log(i);
// }

function prrimeNumbers(n) {
  if (n <= 1) return "invalid number";
  const primes = [];

  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      //Let's say i = 29:
      // The square root of 29 is approximately 5.39.
      // So, j will run from 2 to 5 (since j * j needs to be less than or equal to 29).

      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
      console.log(i);
    }
  }
  return primes;
}

const n = 10;
const res = prrimeNumbers(n);
console.log(res);
