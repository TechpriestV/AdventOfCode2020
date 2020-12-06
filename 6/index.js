const { group } = require('console');
const fs = require('fs');

const data = fs.readFileSync('input', 'utf-8').split('\n\n').map(group => group.split('\n'))
const answerA = data.map(group => {
  const found = new Set()
  let numberOfFound = 0
  group.forEach(person => {
    person.split('').forEach(question => {
      if (!found.has(question)){
        numberOfFound++
        found.add(question)
      }
    })
  })
  return numberOfFound
})


const answerB = data.map(group => {
  const found = new Map()
  let persons = 0,
      allAnswered = 0
  group.forEach(person => {
    persons++
    person.split('').forEach(question => {
      if (!found.has(question)) {
        found.set(question, {count: 1})
      } else {
        found.get(question).count++
      }
    })
  })

  for (counts of found.values()) {
    if (counts.count === persons) {
      allAnswered++
    }
  }
  return allAnswered
})

console.log('answer a: ', answerA.reduce((a, b) => a + b, 0));
console.log('answer b: ', answerB.reduce((a, b) => a + b, 0));
