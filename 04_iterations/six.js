let arr = [1,5,32,3,1,5,6,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
// let arr2 = arr.filter((item)=> item>2)
// let arr2 = arr.filter((val)=>{
//     return val>3;
// })
// console.log(arr.filter((val)=>{
//     return val>3;
// }))
// console.log(arr2);

const newnums = []
arr.forEach((num)=>{
    newnums.push(num);
})
console.log(newnums);

