const useremail = "shreyas@gmail.com"

if(useremail){
    console.log("user has email");
    
}else{
    console.log("dont have user email");
    
}

const arr = []
if(arr.length===0){
    console.log("array is empty")
}

const obj = {}
if(Object.keys(obj).length===0){
    console.log("object is empty");
    
}

//?? this operator get more than equal to 1 or  values it assigns first value and if the first values are null or undefined then it checks for next value and assigned it
let val = 10 ?? 5
let val1 = null ?? 5
console.log(val)
console.log(val1)


const price = 100

price<=80 ? console.log("price is cheap") : console.log("expensive");

