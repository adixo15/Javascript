// Parent class User
class User {
    constructor(username) {        // Constructor initializes username
        this.username = username
    }

    logme() {                      // Method to display username
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child class Teacher extending User
class Teacher extends User {
    constructor(username, email, password) {   // Constructor for Teacher class
        super(username)        // Calls parent class constructor to set username
        this.email = email     // Adds new property email specific to Teacher
        this.password = password  // Adds new property password specific to Teacher
    }

    addCourse() {              // Method specific to Teacher class
        console.log(`A new course has been added by ${this.username}`)
    }
}

// Create an object of Teacher class
const arhoi = new Teacher("arohixo", "arohi@example.com", "arhoi32")

arhoi.logme()       // Calls inherited method from User class
arhoi.addCourse()   // Calls method from Teacher class

// Create an object of parent User class
const masalaChai = new User("masalaChai")

masalaChai.logme()  // Calls logme method from User class

// Check if arhoi object is an instance of User (true because Teacher extends User)
console.log(arhoi instanceof User);
