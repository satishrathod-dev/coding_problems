const arr = [1, 2, 3, 4, 5, 6];
const res = evenOdd(arr);

function evenOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log("Even", arr[i]);
    } else {
      console.log("odd", arr[i]);
    }
  }
}
