function multipleBy5(num){
 return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));//calls the function normally
console.log(multipleBy5.power);//shows the added property.
console.log(multipleBy5.prototype);//prints an empty prototype object, which is automatically created for every function — it’s what JavaScript uses for inheritance when creating objects with new
//this code shows that function can also be an object
// Here, multipleBy5 is a normal function that multiplies a number by 5.
// But then, multipleBy5.power = 2 adds a custom property to the function — showing that functions in JavaScript can store key-value pairs just like objects.
// So, functions are not only callable; they also act as objects with their own properties and methods.
function createUser(username, score){
    this.username = username
    this.score = score
}
// // This function acts like a blueprint for user objects.
// When you use new createUser(), JavaScript:
// Creates a new empty object.
// Sets this to refer to that new object.
// Links the object to createUser.prototype.
// Returns the new object automatically.
createUser.prototype.increment=function(){
     this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/