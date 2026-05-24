const hero1 = ["spidermab", "hulk", "shaktiman"]
const hero2 = ["ironman", "batman" ]
hero2.push(hero1) //array ke andhar array aajaega
console.log(hero2[2][1])
// const hero3 = hero1.concat(hero2);
const hero3 = [...hero1, ...hero2] // this ... acutally spread all the elemnts of the both arrays
console.log(hero3)
const arr = [1,2,3,[4,5,6],7,[8,9,[10,11],12],13]
const arr2 = arr.flat(Infinity)
console.log(arr2)

console.log("B ", arr)
console.log(Array.from("shreyass"));
console.log(Array.from({name:"vidhi"}));

let a = 102
let b = 313
let c = 132
console.log(Array.of(a,b,c))