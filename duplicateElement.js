const arr = [1, 2, 2, 3, 4, 4, 5, 7, 7, 1];
// const arr = [20, 23, 45, 10, 4, 11];
// const res = arr.sort((a, b) => {
//   console.log("A", a + " " + "B", b);
//   a - b;
// });
// console.log(res);
// // const res = duplicateElement(arr);

const res = arr.filter((value, index, arr) => {
  // console.log(arr);
  //   return arr.indexOf(value) === index; // Provide array after removing duplicates
  return arr.indexOf(value) !== index; // Provide array with duplicates values
});
console.log(res);

// console.log(res);
// function duplicateElement(arr) {
//   // let i = 0;
//   // let j =i+1;

//   // while(i<j){

//   // }
//   let arr2 = [];
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] == arr[i + 1]) {
//   //       arr2.push(arr[i]);
//   //     }
//   //   }
//   //   console.log(arr2  );
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         console.log(arr[i]);
//         // arr2.push(arr[i]);
//       }
//     }
//   }
//   console.log(arr2);
// }

// const s = "Satish   Pralhad     Rathod";

// console.log(s.replaceAll("//s", ""));
