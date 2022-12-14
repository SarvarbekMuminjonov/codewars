/**Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 */
function validParentheses(str) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") count++
    if (str[i] == ")") {
      if (count > 0) count--
      else return false
    }
    if (i == str.length - 1 && count == 0) return true
  }
}

// function validParentheses(str){

// }
console.log(validParentheses("(()()())"))
console.log(validParentheses("()))((()"))
