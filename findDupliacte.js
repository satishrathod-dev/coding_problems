const arr = [1, 1, 2, 2, 2, 3, 4, 5, 1, 5];
const res = findDuplicate(arr);

function findDuplicate(arr) {
  //   arr.sort((a, b) => a - b);
  let duplicate = [];
  // let foundElement =
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        //   duplicate.push(arr[i]);
      }
    }
    if (count >= 2 && !duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  console.log(duplicate);
}
