const R = require('ramda')

function *evenFibonacciUpTo(n) {
  let current = 0
  let next = 1

  while (next < n) {
    if (current % 2) {
      yield current
    }
    [current, next] = [next, current + next]
  }
}

const [...numbers] = evenFibonacciUpTo(4000000)

const sumOfEventFibonacciNumber = R.reduce(R.add, 0, numbers)

console.log(sumOfEventFibonacciNumber)