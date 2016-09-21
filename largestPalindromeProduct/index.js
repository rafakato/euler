const R = require('ramda')

const palindrome = (n) => n === parseInt(n.toString().split('').reverse().join(''), 10);


const products = []

R.range(100, 1000).forEach((x) => {
  R.range(x, 1000).forEach((y) => {
    products.push(x * y)
  })
})

const largestPalindromeProduct = Math.max(...products.filter(palindrome))

console.log(largestPalindromeProduct)