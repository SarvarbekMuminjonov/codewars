function cakes(recipe, available) {
  let len = 0,
    count = []
  let availableKeys = Object.keys(available)
  let recipeKeys = Object.keys(recipe)
  recipeKeys.map((key) => {
    if (availableKeys.includes(key)) len++
  })
  if (len == recipeKeys.length) {
    recipeKeys.map((key) => {
      count.push(available[key] / recipe[key])
    })
    return Math.floor(count.sort((a, b) => a - b)[0])
  } else return 0
}
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
)
