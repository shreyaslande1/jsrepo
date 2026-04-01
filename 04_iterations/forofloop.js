let a = [1,2,4,6,8]
a.forEach((val)=>{
    console.log(val);
})
for(let val of a){
    console.log(val);
}


const abcd = new Map()
abcd.set('IN','India') 

abcd.set('usa','united states of amarica')
console.log(abcd);

for(let [key,val] of abcd){
    console.log(key, ":-",val)
}

let myobject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for(const val in myobject){
    console.log(`${val} is a shortcut for ${myobject[val]}`)
}

const prog = ["js","ruby","python","cpp"]
for(let val in prog){
    console.log(val)//this will print keys like 0,1,2,3
    console.log(prog[val])
}