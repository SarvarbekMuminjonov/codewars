//my solution
/**Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */
// function toCamelCase(str) {
//   let array = str.split(/[_ -]/)
//   let newStr = ''
//   array.map((val, index) => {
//     if(index!=0) return val[0].toUpperCase() + val.slice(1)
//     else return val
//   }).map(val=>newStr=newStr+val)
//   return newStr
// }
// let newStr = ''
// console.log(("The_Stealth_Warrior").split(/[_ -]/).forEach(item=))
//best solution
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("The_Stealth_Warrior"))