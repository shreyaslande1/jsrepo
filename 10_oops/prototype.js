const allheros = ["spiderman", "batman", "hulk"]

const heropower = {
    spiderman: "spider",
    batman: "bat",
    hulk: "biceps",

    showpoewer: function(){
        console.log(`the power of bat man is ${this.batman}`);
    }
}

Object.prototype.shreyas = function(){
    console.log("shreyas is present in all objects")
}

// heropower.shreyas()
// allheros.shreyas()

Array.prototype.vidhi = function(){
    console.log("vidhi is present in all objects")
}

// heropower.vidhi()
allheros.vidhi()


//prototyple inheritance
const user = {
    name:"chai",
    email:"chai@google.com"
}

const teacher = {
    name:"shreyas",
    salary :"200000"
}

const tasupport = {
    hey :" hey"
}
const teaching_support = {
    issupport : true,
    supporter : "vidhi",

    __proto__:teacher //we have accessed the properties of teacher in the object teaching_support
}
console.log(teaching_support.name);   


//another method to do this
teacher.__proto__ = user
console.log(teacher.email);


// the latest method for this is
Object.setPrototypeOf(tasupport,teaching_support)
console.log(tasupport.issupport);



let anotherusername = "chaiaurcode         "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`the true length is: ${this.trim().length}`);
}

anotherusername.truelength()
"shreyash          lande is a great person        ".truelength()
