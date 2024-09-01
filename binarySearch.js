const arr = [10, 20, 30, 40, 50];
const t = 40;
const res = binarySearch(arr, t);
console.log(res);

function binarySearch(arr, t) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (t == arr[mid]) {
      return mid;
    }

    if (t < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
