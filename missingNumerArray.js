const arr = [9, 11, 14, 15, 13];
const res = missingNumber(arr);

// function missingNumerArray(arr) {
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
//     console.log(sum1);
//   }
//   for (let i = 11; i <= 15; i++) {
//     sum2 += i;
//   }

//   let missingNumber = sum2 - sum1;
//   console.log(missingNumber);
// }

function missingNumber(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let missingNumber = [];

  for (let i = minNum; i < maxNum; i++) {
    if (arr.indexOf(i) < 0) {
      missingNumber.push(i);
    }
  }
  console.log(missingNumber);
}
