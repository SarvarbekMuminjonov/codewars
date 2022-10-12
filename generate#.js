/**The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */
function generateHashTag(str) {
  if (str.match(/[a-z]/g) && str.split(/ /g).join('').length<140) {
    let arr = str
      .split(/ /g)
      .filter((a) => a !== "")
      .map((a) => a.replace(a[0], a[0].toUpperCase()))
    return "#" + arr.toString().replaceAll(",", "")
  } else return false
}
console.log(generateHashTag( '#LooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongCat' ))
/*best solution
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}*/