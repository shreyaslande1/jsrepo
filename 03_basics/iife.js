//IIFE immediately invoked function expression

(function iife(){
    console.log("database connected")
})
();


((name)=>{
    console.log(`DB connected two ${name}`)
})
("shreyas");

const ch  = ()=>{
    return 4+3
}
console.log(ch())