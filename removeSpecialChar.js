// const s = "sa@#$%#@tish RA%^&@#!$thod";

// const res = s.replace(/[^a-zA-Z0-9\s]/g, "");
// console.log(res);

const str = "Satish    Pralhad Rathod";

// const res = str.replaceAll(" ", "").trim();
const res = str.replaceAll(/\s+/g, " ").trim();

console.log(res);
