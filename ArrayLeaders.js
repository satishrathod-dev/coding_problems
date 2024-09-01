function leaders(arr) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] >= arr[j]) {
  //         // console.log(arr[i]);
  //         newArr.push(arr[i]);
  //       }
  //     }
  //   }
  //   console.log(newArr);
  //   let i = 0;
  //   for (let j = 1; j < arr.length; j++) {
  //     if (arr[i] >= arr[j]) {
  //       newArr.push(arr[i]);
  //       //   console.log(arr[i]);
  //       i++;
  //     }
  //   }
  //   newArr.push(arr[arr.length - 1]);
  //   console.log(newArr);
  let i = 0;
  let j = i + 1;
  while (i < j) {
    if (arr[i] >= arr[j]) {
      newArr.push(arr[i]);
      i++;
    } else if (arr[i] < arr[j]) {
      j++;
    }
  }
  i++;
  console.log(newArr);
}

// const arr = [10, 4, 2, 4, 1];
const arr = [16, 17, 4, 3, 5, 2];
const res = leaders(arr);
