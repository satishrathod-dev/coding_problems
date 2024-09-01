const arr = [1, 2, 5, 3, 4, 6, 7, 8];
console.log("Origional array", arr);

const res = sort(arr);
console.log(res);

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp;
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  // console.log(arr);
  return arr;
}
