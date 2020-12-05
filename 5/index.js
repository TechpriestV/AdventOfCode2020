const fs = require('fs');

const data = fs.readFileSync('input', 'utf-8').split('\n')

const rows = [...Array(128).keys()]
const columns = [...Array(8).keys()]

const plane = columns.map(clmn => [...rows].map(seat => '_'))

answerA = data.map(bordingPass => {
  const binNav = (stepArray, searchArray, lowChar) => {
    localArray = [...searchArray]
    for (const char of stepArray) {
      if (char === lowChar) {
        localArray = localArray.slice(0, localArray.length / 2)
      } else {
        localArray = localArray.slice(localArray.length / 2, localArray.length)
      } 
    }
    return localArray[0]
  }

  let finalRow = binNav(bordingPass.substring(0, 7).split(''), rows, 'F')
  let finalColum = binNav(bordingPass.substring(7, 10).split(''), columns, 'L')
  plane[finalColum][finalRow] = 'X'
  return finalRow * 8 + finalColum
})

console.log('max seat index: ', Math.max(...answerA));

for (const column in plane) {
  for (const row in plane[column]) {
    if (plane[column][row] !== 'X') {
      myID = parseInt(row) * 8 + parseInt(column) // should not do for .. in on arrays. 
      if (answerA.includes(myID - 1) && answerA.includes(myID + 1)) {
        console.log(`possible seat column: ${column} row: ${row}, id: ${myID}`)
      }
    }
  }
}