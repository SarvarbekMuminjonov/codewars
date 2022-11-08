function solution(input, markers) {
  let str = input.split(" ")
  console.log(str)
  str.map((item) => {
    if (markers[]) {
      if (str[str.indexOf(item)].length > 1) str[str.indexOf(item)] = undefined
      else {
        str[str.indexOf(item) + 1] = undefined
        str[str.indexOf(item)] = undefined
      }
    }
  })
  return str
}
// function solution(input, markers) {
//   let str = ""
//   return str.match(/(?<=\#)(.*?)(?=[^\t]*)/gim)
// }

let result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
  "#",
  "!",
])
console.log(result)
