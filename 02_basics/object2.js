const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "shreyas"
tinderuser.isloggedin = true

console.log(tinderuser)

const activeuser = {
    email:"shreyaslande@gmail.com",
    username:{
        userfullname:{
            firstname :"shreyas",
            lastname:"lande"
        }
    }
}
console.log(activeuser.username.userfullname.firstname)

const obj1 = {
    1:"a", 2:"b"
}
const obj2 = {
    3:"c", 4:"d"
}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))

console.log(tinderuser.hasOwnProperty('iid'))