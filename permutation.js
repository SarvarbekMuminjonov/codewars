function permutations(string) {
  let combi = []
  if (string.length === 1) {
    combi.push(string)
    return combi
  }
  for (let i = 0; i < string.length; i++) {
    string = string.slice(-1) + string.slice(0, -1)
    let part1 = string.slice(0, -1)
    let part2 = string.slice(-1)
    for (let j = 0; j < part1.length; j++) {
      part1 = part1.slice(-1) + part1.slice(0, -1)
      combi.push(part1 + part2)
      combi.push(part1.split("").reverse().join("") + part2)
    }
  }
  return Array.from(new Set(combi))
}

console.log(permutations("aacd"))

// DESCRIPTION:
// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.
