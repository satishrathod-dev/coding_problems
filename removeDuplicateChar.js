const s = "Programming";
const res = removeDuplicate(s);
console.log(s);

function removeDuplicate(s) {
  const res = s.split("");
  let ans = [];
  //   let strRes = [];

  //   let i = 0;
  //   for (let j = 0; j < res.length; j++) {
  //     if (res[i] !== res[j]) {
  //       res[i] = res[j];
  //       i++;
  //       strRes.push(res[i]);
  //       console.log(res[i]);
  //     }
  //   }
  //   console.log(strRes.join(""));
  //   const ans = res.filter((value, index, res) => {
  //     return res.indexOf(value) === index;
  //   });
  res.forEach((element) => {
    if (!ans.includes(element)) {
      ans.push(element);
    }
  });

  console.log(ans.join(""));
}
