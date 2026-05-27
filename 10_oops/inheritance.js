class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`the user ${this.usrname} is logged in`)
    }
}
class teacher extends user{
    constructor(username, email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addsubject(){
        console.log(`a new subject is added by the teacher ${this.username}`)
    }
}
const shreyas  = new teacher("shreyas","shreyash123@gmail.com",242424)
shreyas.addsubject()
const chai = new user("masalachai")

console.log(shreyas instanceof user);
