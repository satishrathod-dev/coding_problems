const s = "Java Programming Java OOPS";

const original_length = s.length;
console.log(original_length);
const removed_length = s.replaceAll("a", "").length;
console.log(removed_length);

const res = original_length - removed_length;

console.log(res);
