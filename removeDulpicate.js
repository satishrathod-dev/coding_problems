const arr = [1, 1, 2, 2, 3, 3, 4, 5, 1, 2];
const res = removeDuplicate(arr);
console.log(res);
console.log(arr.slice(0, res));

function removeDuplicate(arr) {
  let i = 0;

  arr.sort((a, b) => a - b);
  //   console.log(arr);

  //   let ans = [];
  //   ans.push(arr[0]);
  //   let count = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      //   count++;
      //   ans.push(arr[j]);
      //   i = j;
    }
  }
  return i + 1;
  console.log(ans);
  console.log(count + 1);
}
