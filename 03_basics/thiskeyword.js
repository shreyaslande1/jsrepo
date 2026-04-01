const user = {
    username:"shreyas",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
user.welcomemessage()
user.username = "vidhi"
user.welcomemessage()
console.log(this);

// const chai = function(){
//     const name = "shreyas"
//     console.log(this.name);  //undefined because wee can access this in objects but not in functions
// }
// chai()


//arrow function
const chai = ()=>{
    const name = "shreyas"
    console.log(this.name);//undefined because wee can access this in objects but not in functions
}
chai()

// const addtwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(5,6))

// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(5,6))

const addtwo = (num1,num2) => ({name:"shreyas"})
console.log(addtwo(5,6))