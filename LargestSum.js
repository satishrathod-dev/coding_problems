// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const num = 4;
// // const res = largestSum(arr, num);

// // function largestSum(arr, num) {
// //   console.log(arr, num);
// // }

// function getMinMax(arr) {
//   // code here
//   let min = -Infinity;
//   let max = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > min) {
//       min = arr[i];
//     } else if (arr[i] < max) {
//       max = arr[i];
//     }
//   }
//   return min;
// }

// const arr = [3, 2, 1, 56, 10000, 167];
// const res = getMinMax(arr);
// console.log(res);

// function removeDuplicate(arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=i; j<arr.length; j++){
//             if(arr[i] == arr[j]){

//             }
//         }
//     }
// }
function removeDuplicate(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(arr[i], i);
  }
  return i + 1;
}

const arr = [1, 1, 2, 2, 3, 4, 4];
const res = removeDuplicate(arr);
console.log(res);
