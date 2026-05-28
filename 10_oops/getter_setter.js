class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const abc = new user("abc@gmail.com","shreyas")
console.log(abc.password)


function uzi(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(vale){
            this._password = vale
        }
    })
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(vale){
            this._email = vale
        }
    })
}

const chai  = new uzi("chai@gpt.com","password123@")
console.log(chai.email);
