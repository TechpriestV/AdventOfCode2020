const fs = require('fs');

const data = fs.readFileSync('input', 'utf-8').split('\n\n').map(line => line.split(/\s+/).map(line => line.split(':')))

const required = [
  ['byr', input => 1920 <= input && input <= 2002],
  ['iyr', input => 2010 <= input && input <= 2020],
  ['eyr', input => 2020 <= input && input <= 2030],
  ['hgt', input => {
    if (input.match(/^[0-9]{3}cm$/)) {
      return 150 <= input.substring(0,3) && input.substring(0,3) <= 193
    } else if (input.match(/^[0-9]{2}in$/)) {
      return 59 <= input.substring(0,2) && input.substring(0,2) <= 76
    }
    else {
      return false
    }
  }],
  ['hcl', input => input.match(/^#[0-9a-f]{6}$/)],
  ['ecl', input => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(key => key === input)],
  ['pid', input => input.match(/^0*[0-9]{9}$/)],
  // 'cid'
]
const valid = data.filter(passport => {
  if (passport.length < required.length) {
    return false
  }
  return (required.filter(rule => {
    return passport.find(line => {
      if (line[0] === rule[0]) {
        return rule[1](line[1])
      }
    })
  }).length === required.length)
})

console.log(valid.length);