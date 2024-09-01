/*let arr = [1, 2, 3, 4, 5];
let index = 2;
let element = -99;

let res = insertElement(arr, index, element);

function insertElement(arr, index, element) {
  for (let i = arr.length; i > index; i--) {
    // console.log(arr[i], arr[i - 1]);
    arr[i] = arr[i - 1];
  }
  console.log(index);
  arr[index] = element;
  console.log(arr);
  return arr;
}
*/
/*
// sumZero in array

const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
const ans = sumZero(arr);
console.log(ans);

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    sum = arr[start] + arr[end];
    console.log(sumx);
    // if (sum == 0) {
    if (arr[start] + arr[end] == 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}*/

/*
function count(arr) {
  if (arr.length) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        // console.log(arr[i], arr[j]);
        arr[i] = arr[j];
        i++;
      }
      console.log(arr[i]);
    }
    return i;
  } else {
    throw new Error("Array is empty");
  }
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9];
const res = count(arr);
console.log(res);*/
