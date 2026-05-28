const user = {
    _email:"shr@123.com",
    _password:"heyyyyyy",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email= value
    }
}

const ab = Object.create(user)
console.log(ab.email);
