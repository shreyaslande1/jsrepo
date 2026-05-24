const obj1 = {
    name:"shreyas",
    age:17,
    isloggedin:false,
    email:"shreyasladnde200@gmail.com",
    lastdays:["monday","wednesday"],
    abcd: function(){
        return "goodmorning"
    }
}

console.log(obj1.abcd())

// console.log(obj1.name)
// console.log(obj1["name"])
// console.log(obj1["lastdays"])
obj1.email = "shreyaschatgpt@gmail.com"
// Object.freeze(obj1)
obj1.email = "shreyasmicro@gmail.com"
// console.log(obj1["email"])
obj1.x = "shreyas"
obj1.greeting = function(){
    console.log("hello js users");
}
obj1.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(obj1.greeting())
console.log(obj1.greetingtwo())
console.log(obj1.x);
