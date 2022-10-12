/**Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */
function incrementString(strng) {
  let len = strng.match(/[0-9]/gm)
  if (strng.length > 0 && len) {
    let alen = strng.match(/[1-9]/gm)
    let a = parseInt(strng.match(/[0-9]/gm).join("")) + 1
    console.log({ alen, len })
    if (alen && len.length == alen.length&&a.toString().length>1)
      return (strng = strng.slice(0, strng.length - a.toString().length+1) + a)
    else return (strng = strng.slice(0, strng.length - a.toString().length) + a)
  } else if (strng == "") return "1"
  else return strng + 1
}

console.log(incrementString("foobar000999"))
/*best Solution
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)*/
// let b = "foo0099"
// let a = parseInt(b.match(/[1-9]/gm).join("")) + 1
// b = b.slice(0, b.length - a.toString().length) + a

// console.log(b)
