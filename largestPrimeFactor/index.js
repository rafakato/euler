const R = require('ramda')

const integerSqrt = (x) => Math.floor(Math.sqrt(x))

const integerDivision = (a, b) => Math.floor(a / b)

const isMod = (n) => (x) => n % x === 0

const factors = (n) => {
  const prime = R.take(1, R.range(2, integerSqrt(n) + 2).filter(isMod(n)))
  if (!prime.length) {
    return n === 1 ? [] : [n]
  }

  return prime.concat(factors(integerDivision(n, prime)))
}

const primeFactors = factors(600851475143)

const largestPrimeFactor = R.last(primeFactors)

console.log(largestPrimeFactor)