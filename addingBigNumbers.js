function add(a, b) {
  const length = a.length >= b.length ? a.length : b.length;
  let q = 0;
  let sum = 0;
  let arr = [];
  for (let i = 0; i < length; i++) {
    const x = b[b.length - 1 - i] ? Number(b[b.length - 1 - i]) : 0;
    const y = a[a.length - 1 - i] ? Number(a[a.length - 1 - i]) : 0;
    console.log({ x, y });

    sum = x + y + q;
    if (sum > 9) {
      q = 1;
      sum = sum - 10;
    } else q = 0;
    arr.push(sum);
  }
  if (q !== 0) arr.push(q);
  return arr.reverse().join("").toString();
}

console.log(add("1372", "69"));

// function add(a, b) {
//   let sum = "";
