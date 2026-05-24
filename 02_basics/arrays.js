let arr = [1,2,3]
arr.push(4)
arr.push(5)
arr.pop()
arr.unshift(9)
arr.unshift(9)
arr.unshift(9)
arr.unshift(9)
arr.shift()
arr.shift()
arr.shift()

console.log("A ",arr)
const newarr = arr.slice(1,3);
console.log(newarr)
console.log("B ", arr)
const newarr2 = arr.splice(1,3);
console.log(newarr2)
console.log("c ", arr)
console.log(arr)
