Math.round = function (number) {
  let str = number.toString().split(".")
  if (Number.parseFloat("0." + str[1]) >= 0.5)
    return Number.parseInt(str[0]) + 1
  else return Number.parseInt(str[0])
}

Math.ceil = function (number) {
  let str = number.toString().split(".")
  if (Number.parseFloat("0." + str[1]) >= 0.1)
    return Number.parseInt(str[0]) + 1
  else return Number.parseInt(str[0])
}

Math.floor = function (number) {
  let str = number.toString().split(".")
  return Number.parseInt(str[0])
}

console.log(Math.round(0.4))
