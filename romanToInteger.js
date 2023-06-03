let nums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romeNumbers(str) {
  let summ = 0
  for (let i = 0; i < str.length; i++) {
    if (nums[str[i]] < nums[str[i + 1]]) {
      console.log(str[i], str[i + 1])
      summ += nums[str[i + 1]] - nums[str[i]]
      i++
    } else summ += nums[str[i]]
  }
  return summ
}
console.log(romeNumbers("MCMXCIV"))
