const n = 145678;
const res = oddEven(n);
// console.log("oddCount", oddCount + "evenCount", evenCount);

// function oddEven(n) {
//   let temp = n.toString().split("");
//   let oddCount = 0;
//   let evenCount = 0;
//   console.log(temp);
//   for (let i = 0; i < temp.lenth; i++) {
//     if (temp[i] % 2 == 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   }
//   //   return [oddCount, evenCount];
//   console.log("oddCount", oddCount + "evenCount", evenCount);
// }

function oddEven(n) {
  let num2;
  let oddCount = 0;
  let evenCount = 0;

  while (n != 0) {
    num2 = n % 10;
    // console.log(num2);
    if (num2 % 2 == 0) {
      console.log("even", num2);
      evenCount++;
    } else {
      console.log("odd", num2);
      oddCount++;
    }
    n = Math.floor(n / 10);
  }

  console.log("oddCount", oddCount + "evenCount", evenCount);
}
