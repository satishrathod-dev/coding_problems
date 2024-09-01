const arr = [11, 14, 16, 17];
const res = missingElement(arr);

function missingElement(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let missingNumbers = [];

  //   console.log(min, max);

  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) < 0) {
      missingNumbers.push(i);
    }
  }
  console.log(missingNumbers);
}
