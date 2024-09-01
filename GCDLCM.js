let n1 = 24;
let n2 = 36;
let on1 = n1;
let on2 = n2;

while (n1 % n2 !== 0) {
  let rem = n1 % n2;
  n1 = n2;
  n2 = rem;
}

console.log("GCD", n2);
console.log("LCM", Math.floor(on1 * on2) / n2);
