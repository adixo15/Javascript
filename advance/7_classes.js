// Class-based implementation
class User{
    // Constructor initializes the properties
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    // Method to encrypt password by appending 1501
    encryptPassword(){
       return`Your passowrd is ${this.password}1501`
    }
     // Method to convert username to uppercase
    changeUsername(){
         return `${this.username.toUpperCase()}`
    }
}
// Creating a new object using the User class
const aditya=new User("adi","aditya123@gmail.com","shukla")
console.log(aditya.encryptPassword())
console.log(aditya.changeUsername())

//behind the scnee
// Constructor function (older way before ES6 classes)
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// Adding method to prototype to encrypt password
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
// Adding method to prototype to change username to uppercase
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

// Creating a new object using constructor function
const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());