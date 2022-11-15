function towerBuilder(floor) {
  let array = []
  let t = "*",
    b
  for (let index = 0; index < floor - 1; index++) {}
  array.push(t)

  for (let index = 1; index < floor; index++) {
    for (let index = 0; index < 2; index++) {
      t += "*"
    }
    array.push(t)
  }
  return array
}
console.log(towerBuilder(10))
