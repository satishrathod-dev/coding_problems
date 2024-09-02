function rotateArray(arr, k) {
  let j;
  let temp;

  while (k > 0) {
    temp = arr[arr.length - 1];

    for (j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = temp;
    k--;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(rotateArray(arr, k));
