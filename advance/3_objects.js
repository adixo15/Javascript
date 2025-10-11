const user={
    username:"Aditya",
    loginCount:8,
    sigin:true,
//creation of an object
getUserDetails: function(){
        console.log("Got user details from database");//on function calling will print this
        console.log(`Username: ${this.username}`);//here we can acess username using this
        console.log(this);//this will give us an empty object
    }
}
console.log(user.username)//we can acess username like this and any other key value like this
console.log(user.getUserDetails())//calling the function inside object
console.log(this)//returns empty object

function User(username, loginCount, isLoggedIn){
    this.username=username//this keyword refers to the new object being created
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
         console.log(`Welcome ${this.username}`);

    }
    return this//In constructor functions, return this is not necessary — JavaScript automatically returns the new object when you use the new keyword.
}
const userOne = new User("hitesh", 12, true)//consturtor calling
const userTwo = new User("ChaiAurCode", 11, false)//new keyword is used so that value is not overwritten
console.log(userOne)
console.log(userTwo)
// //This code explains two ways of creating and handling objects in JavaScript — using object literals and constructor functions.
// It begins by creating an object named user using the object literal method. This object has properties like username, loginCount, and signin, along with a method getUserDetails. When getUserDetails() is called, it prints a message, displays the username using this.username, and logs the entire object. Here, the this keyword refers to the current object (user), allowing access to its properties. Outside the object, any property like username can also be accessed directly using user.username.
// Next, a constructor function named User is defined to create multiple user objects with similar properties. The function takes three parameters — username, loginCount, and isLoggedIn — and assigns them to the object using the this keyword. A method named greeting is also defined inside the constructor to display a personalized welcome message. When objects are created using the new keyword, like userOne and userTwo, JavaScript automatically creates a new empty object, assigns the values, and returns it.
// Finally, logging userOne and userTwo shows two separate objects with their own data, proving that the new keyword prevents overwriting and allows creating multiple independent instances. Overall, the code demonstrates the concept of object creation, this keyword usage, and the difference between object literals and constructor functions in JavaScript.