// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// };

// let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
// console.log(quickSort(myArray)); // Output: [1,2,3,4,5,6,7,8]

const quickSortInPlace = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    console.log("pivotIndex", pivotIndex);
    quickSortInPlace(arr, low, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, high);
  }
  return arr;
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  console.log(i + 1);
  return i + 1;
};

let myArray = [12, 45, 10, 1, 5, 14];
console.log(quickSortInPlace(myArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
