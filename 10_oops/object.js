
function user(username, price){
    this.username = username
    this.price = price

}

user.prototype.increment = function(){
    this.price++
}

user.prototype.printMe = function(){
    console.log(`the price of chai is ${this.price}`);
}

const chai = new user("chai",25)
const tea = new user("tea",250)
chai.increment()
chai.printMe()