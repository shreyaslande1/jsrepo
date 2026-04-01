const score = 89
const balance = new Number(100.5999)

console.log(typeof score)
console.log(typeof balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const num2 = 123.48975
console.log(num2.toPrecision(4))

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-In'))

console.log(Math.random)
console.log((Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
