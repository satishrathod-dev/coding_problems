const arr = [50, 30, 40, 20, 10];
const res = minMax(arr);

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("min", min + " " + "max", max);
}
