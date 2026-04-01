console.log(addone(5))//this will execute
function addone(num){
    return num+1;
}

console.log(addtwo(5))//this will not execute
const addtwo = function addtwonumbers(num){
    return num+2;
}