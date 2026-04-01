function addtwonumbers(number1, number2){
    let result = number1+number2
    return result
}
const result = addtwonumbers(3,4)
// result = 9
// console.log(result)

function loggedin(user = "shreyas"){//if youser doesnot passed any value then the by default name for user will be shreyas
    if(!user){//!user mean user===undefined
        console.log("please enter a value");
        return
    }
    return `${user} just logged in`
}
// console.log(loggedin());

function calculatepricecart(val1, val2,...num1){// it is taking all values and making an array by ... this operator but the first two values are not included because it is assigning seperately
    return num1;
}
console.log(calculatepricecart(100,400,200,800,500));

const user = {
    name:"shreyas",
    price:200
}
function handelobject(anyobject){
    console.log(`any name is ${anyobject.name} and price is ${anyobject.price}`);
    
}
handelobject(user)
handelobject({name:"shreyas", price:800})


function pretty(){
    console.log("i am pretty")
}
pretty()