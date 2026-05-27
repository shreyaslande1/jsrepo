// class user{
//     constructor(username, email, rollnumber){
//         this.username = username
//         this.email = email
//         this.rollnumber = rollnumber
//     }

//     encryption(){
//         return  `${this.username}ABCD`
//     }
//     changename(){
//         return  `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("shreyas","shreyas.chatgpt.com",2407601)
// console.log(chai.encryption())
// console.log(chai.changename());

const newuser = function(username, email, rollnumber){
    this.username = username
    this.email = email
    this.rollnumber = rollnumber
}

newuser.prototype.encryption = function(){
    return `${this.username}ABCD`
}
newuser.prototype.changename = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new newuser("vidhi","vid@gmail.com",69)
console.log(chai.encryption())
console.log(chai.changename())