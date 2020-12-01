fs = require('fs')

let file = fs.readFile('input', 'utf8', (err, data) => {
  if (err) {console.log(err)}
  const numbers = data.split('\n').map(str => parseInt(str))

  const answerA = numbers.filter(x => {
    return (numbers.some(y => x + y === 2020))
  })
  
  const answerB = numbers.filter(x => {
    return numbers.some(y => {
      return numbers.some(z => x + y + z === 2020)
    })
  })
  console.log('answerA: ', answerA[0] * answerA[1]);
  console.log('answerB: ', answerB[0] * answerB[1] * answerB[2]);
})