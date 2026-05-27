// const oops = {
//     username:"shreyas",
//     password:"12321",

//     greeting:function(){
//         // console.log("hey im shreyas");
//         console.log(this);
        
//     }
// }
// console.log(oops.username)
// console.log(oops.greeting());


function oopsa(username,password){
    this.username = username
    this.password = password

}
const oneuser = new oopsa("shrey","123iop")
const twouser = new oopsa("shreyashhhhh","1ooooo")
console.log(twouser)
console.log(oneuser.constructor)