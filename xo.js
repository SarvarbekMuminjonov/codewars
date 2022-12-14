//node 10
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */
function XO(str) {
  if (str.match(/x/gim) || str.match(/o/gim)) {
    if (str.match(/x/gim) && str.match(/o/gim)) {
      if (str.match(/x/gim).length == str.match(/o/gim).length) return true
      else return false
    } else return false
  } else return true
}
console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp")) // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"))
// console.log("zpzpzpp".match(/x/gmi)?.length)
/* node 16
function XO(str) {
     return str.match(/x/gmi)?.length == str.match(/o/gmi)?.length? true : false
}
BEST SOLUTION 
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

*/

