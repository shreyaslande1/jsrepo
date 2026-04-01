const sr = 'shreyas'
console.log(sr.toUpperCase())
console.log(sr)
console.log(typeof sr)

const str2 = new String('shreyas-it')
console.log(typeof str2)
console.log(str2[0])
console.log(str2.charAt(4))
console.log(str2.indexOf('y'))

const str3 = str2.substring(0,6)
console.log(str3)

// const str3 = str2.slice(-8,6)
// console.log(str3)

const shr4 = "    shreyas   "
console.log(shr4.trim())

const str4 = "https://sherhu%20mei"
console.log(str4.replace('%20','-'))

let age = 17
let weight = 63
console.log(`hey my na is my age is ${age} nad my weight is ${weight} kg`)