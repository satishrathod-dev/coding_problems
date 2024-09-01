const arr = [10, 20, 30, 40, 50];
const key = 60;
const res = targetElement(arr, key);
console.log(res);

function targetElement(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    // for(let j=)
    if (arr[i] == k) {
      return i;
    }
  }
  return -1;
}
