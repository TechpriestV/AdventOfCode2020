const fs = require('fs');

const data = fs.readFileSync('input', 'utf-8').split('\n')

const checkForTrees = function (data, steps = 3, speed = 1) {
  
  let hoz = steps,
  acc = 0
  for (let index = speed; index < data.length; index += speed) {
    const element = data[index];
    if (element[hoz] === '#') {
      acc++
    }
    hoz += steps
    if (hoz >= element.length) {
      hoz -= element.length
    }
  }
  return acc
}
console.log('answer a: ', checkForTrees(data));

console.log('answer b: ', checkForTrees(data, 1, 1) * 
                          checkForTrees(data, 3, 1) *
                          checkForTrees(data, 5, 1) *
                          checkForTrees(data, 7, 1) *
                          checkForTrees(data, 1, 2));