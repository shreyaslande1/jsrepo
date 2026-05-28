// console.log(Math.pi)
// Math.PI = 5
// console.log(Math.pi)

const discripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discripter);

const chai = {
  name: "chai",
  price: 250,

  orderchai: function () {
    console.log("chai nahi bani");
  },
};

const ab = Object.getOwnPropertyDescriptor(chai, "name");
console.log(ab);
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
const b = Object.getOwnPropertyDescriptor(chai, "name");

console.log(b);
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }
}