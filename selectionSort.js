const arr = [4, 2, 1, 2, 5, 3];
const res = selectionSort(arr);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        console.log(arr[j]);
        min = j;
      }
      //   console.log(arr[min]);
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr);
}
