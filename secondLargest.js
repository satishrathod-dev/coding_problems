const arr = [11, 2, 5, 3, 4, 6, 10, 7, 8];
const res = secondLargest(arr);
console.log(res);

function secondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
