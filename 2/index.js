const fs = require('fs');

const data = fs.readFileSync('input', 'utf-8').split('\n')
let ansB = 0
res = data.filter(line => {
  const a = line.split(':')
  b = a[0].split(' ')
  c = b[0].split('-').map(number => {
    return parseInt(number)
  })
  let acc = 0
  if(c.filter(value => {
    console.log(a[1].trim()[value - 1], b[1]);
    return a[1].trim()[value - 1] === b[1]
  }).length === 1) {
    ansB++
  }
  acc = a[1].split('').reduce((acc, value) => {
    if (value === b[1]){
      acc++
    }
    return acc
  })
  return (c[0] <= acc && acc <= c[1])
})
console.log(res.length);
console.log(ansB);