const num = 1234;
const res = isPallindrome(num);
console.log(res);

function isPallindrome(num) {
  let revNumber = 0;
  let originalNum = num;

  while (num != 0) {
    revNumber = revNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(originalNum);
  if (revNumber == originalNum) {
    return true;
  } else {
    return false;
  }
  // console.log(revNumber);
}
