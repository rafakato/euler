const R = require('ramda')

const isMultiple = (n) => ((n % 3) === 0) || ((n % 5) === 0)

const getNumbers = (quantity) => R.times(R.identity, quantity)

const onlyMultiple = R.filter(isMultiple, getNumbers(1000))

const sumOfMultiples = R.reduce(R.add, 0, onlyMultiple)

console.log(sumOfMultiples)