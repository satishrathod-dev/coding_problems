const arr = [10, 20, 30, 40, 50];
const res = minMax(arr);
console.log(res);

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] < max) {
      max = arr[i];
    }
  }
  return { min, max };
}
