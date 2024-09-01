const str = "MADAM";
const res = isPallindrome(str);
console.log(res);

function isPallindrome(s) {
  let word = s.toLowercase();
  let rev = "";
  let originalStr = s;

  for (let i = word.length - 1; i >= 0; i--) {
    rev = rev + word.charAt(i);
  }
  //   console.log(rev);
  //   console.log(s);
  if (word == rev) {
    return true;
  } else {
    return false;
  }
}
