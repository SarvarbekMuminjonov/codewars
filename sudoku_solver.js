function sudoku(puzzle) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < 9; i++) {
    // let setColumns = new Set()
    // let setRows = new Set()
    let temp = []
    for (let j = 0; j < 9; j++) {
      temp.push(puzzle[j][i])
    }
    puzzle.push(temp)
    // console.log({ setColumns, setRows })
    // if (setColumns.size == 9 && setRows.size == 9) return puzzle
  }
  let counter = 0
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        !puzzle[i].includes(numbers[j]) &&
        !puzzle[i + 9].includes(numbers[j]) &&
        !numbers.includes(puzzle[i][j])
      )
        puzzle[i][j] = numbers[j]
    }
    if (!puzzle[i].includes(0)) counter++
  }
  console.log(puzzle.slice(0, 9))
  if (counter > 0) return puzzle
  return sudoku(puzzle.slice(0, 9))
}
// function sudoku(puzzle) {
//   return puzzle.reverse()
// }

console.log(
  sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
)
