function factorial(n) {
  if (n == 0) return String(1)
  return multiply(n, factorial(n - 1))
}

function multiply(a, b) {
  let num = []
  let all = []
  a = a.toString().split("").reverse()
  b = b.toString().split("").reverse()
  let temp = 0
  for (const iterator of b) {
    num = []
    for (const item of a) {
      num.push(((item * iterator) % 10) + temp)
      temp = Math.floor((item * iterator) / 10)
    }
    if (temp > 0) num.push(temp)
    console.log(num)
    all.push(num.reverse())
  }
  return all
}
function add(arr) {
  let sum = []
  let arr1 = arr[0].reverse()
  let arr2 = arr[1].reverse()
  for (let i = 0; i < arr[0].lenght; i++) {
    num.push(((item + iterator) % 10) + temp)
    temp = Math.floor((item * iterator) / 10)
  }
}

console.log(multiply(12, 13))
// console.log(factorial(15))
// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial
// NOTES:

// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

// I have removed the use of require in the javascript language.
