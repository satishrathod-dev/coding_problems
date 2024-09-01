const arr = [10, 20, 30, 40, 50, 10];
const res = reverseArray(arr);

function reverseArray(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  console.log(rev);
}
