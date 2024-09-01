const name = "shree";
const res = reverseString(name);
console.log(res);

function reverseString(name) {
  let arr1 = [];
  let arr2 = name.split("");
  //   console.log(arr2);
  for (let i = name.length - 1; i >= 0; i--) {
    arr1.push(arr2[i]);
  }
  //   console.log(arr1);
  // let reverseName = arr1.join("");
  // return reverseName;
  return arr1.join("");
}

// Another approach
// const str = "Satish";
// const res = reverseString(str);
// console.log(res);

// function reverseString(str) {
//   let str2 = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 = str2 + str.charAt(i);
//   }

//   return str2;
// }
