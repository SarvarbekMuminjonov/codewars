function polindrom(num) {
  let str = num.toString()
  let part1 = ""
  let part2 = ""
  const partition = (n) => {
    part1 = str.slice(0, str.length / 2)
    part2 = str
      .slice(str.length / 2 + n)
      .split("")
      .reverse()
      .join("")
  }
  if (str.length % 2 == 0) {
    partition(0)
  } else {
    partition(1)
  }
  if (part1 == part2) return true
  return false
}
console.log(polindrom(1221))
console.log(polindrom(232))
console.log(polindrom(444))
console.log(polindrom(454))
