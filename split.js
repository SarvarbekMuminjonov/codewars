/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']*/
function solution(str) {
  let arr = [],
    item = ""
  if (str.length % 2 == 1) str += "_"
  for (let index = 0; index < str.length; index++) {
    item += str[index]
    if (index % 2 == 1) {
      arr.push(item)
      item = ""
    }
  }
  return arr
}
console.log(solution("abcde"))
