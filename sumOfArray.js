const arr = [5, 2, 7, 9, 6];
const n = 14;
const res = sumOfArray(arr);

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
