// const codeSize = require("fs").statSync("solution.txt").size
// console.log("<LOG::Code size>", codeSize)

const reverse = (a) => {
  let newStr = []
  for (let i = a.length - 1; i >= 0; i--) newStr.push(a[i])

  return newStr
}

console.log(reverse([1, 2, 3]))
// console.log([...[1, 2, 3]])
