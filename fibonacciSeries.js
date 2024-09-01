const n = 10;
const res = fibonacci(n);

function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;

  console.log(n1);
  console.log(n2);
  for (let i = 2; i < 10; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    // console.log(n1);
    console.log(sum);
  }
}
