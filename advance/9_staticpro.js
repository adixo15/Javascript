// Define a User class
class User {
    constructor(username) {             // Constructor initializes username
        this.username = username
    }

    logMe() {                           // Method to log the username
        console.log(`Username: ${this.username}`);
    }

    static createId() {                 // Static method belongs to class, not objects
        return `123`
    }
}

// Create a User object
const hitesh = new User("hitesh")

console.log(hitesh.createId())          // ❌ Error: createId() is static and cannot be accessed through an object

// Define a Teacher class that extends User
class Teacher extends User {
    constructor(username, email) {      // Constructor for Teacher
        super(username)                 // Call parent constructor to set username
        this.email = email              // Add email property
    }
}

// Create a Teacher object
const iphone = new Teacher("iphone", "i@phone.com")

// ✅ You can access static method only via class, not instances
console.log(User.createId())            // Works fine: static method called using class name
//correct code

// Parent class: Person
class Person {
    constructor(name) {                 // Constructor initializes name
        this.name = name
    }

    greet() {                            // Method to greet the person
        console.log(`Hello, ${this.name}!`);
    }

    static generateId() {                // Static method belongs to the class
        return `ID-001`
    }
}

// Create a Person object
const alice = new Person("Alice")
alice.greet()                            // Logs: Hello, Alice!

// Call static method correctly via class name
console.log(Person.generateId())         // Logs: ID-001

// Child class: Instructor extends Person
class Instructor extends Person {
    constructor(name, subject) {         // Constructor for Instructor
        super(name)                       // Call parent constructor to set name
        this.subject = subject           // Add subject property
    }

    showSubject() {                       // Method specific to Instructor
        console.log(`Teaches: ${this.subject}`);
    }
}

// Create an Instructor object
const bob = new Instructor("Bob", "Math")
bob.greet()                               // Logs: Hello, Bob! (inherited)
bob.showSubject()                          // Logs: Teaches: Math

// Static method can still be called via parent class
console.log(Person.generateId())          // Logs: ID-001
