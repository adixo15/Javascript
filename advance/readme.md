1.The code demonstrates how to fetch data from a server using XMLHttpRequest (XHR) — a key part of AJAX. It starts by defining a GitHub API URL for user data and creating an XHR object that acts as a messenger between the browser and the server. The open('GET', URL) method sets up a GET request, while onreadystatechange monitors the request’s progress. When readyState reaches 4, it means the response is fully received. The response text (in string form) is then converted to a JavaScript object using JSON.parse(), allowing direct access to data like the user’s followers. Finally, send() dispatches the request, and the whole process happens asynchronously without reloading the pag

2.A complete demonstration of how Promises and asynchronous operations work in JavaScript. It starts with promiseOne, which simulates an asynchronous task using setTimeout that completes after 1 second. When the task finishes, it calls resolve(), and the attached .then() logs "Promise consumed", showing how to consume a promise once it is fulfilled. A similar approach is demonstrated in promiseThree, which resolves with a JavaScript object containing username and email. The .then() attached to it receives this object as a parameter and logs it, demonstrating how promise values can carry meaningful data.
promiseFour introduces conditional resolve/reject logic, where a simulated error determines whether the promise succeeds or fails. Its chained .then() handlers first log the resolved object and then extract and log just the username. If the promise rejects, the .catch() logs the error, and .finally() runs regardless of success or failure, indicating that the promise is settled.
promiseFive shows a modern way of consuming promises using async/await. The promise resolves or rejects after 1 second based on a simulated error, and the consumePromiseFive async function uses try…catch to handle success or failure in a clean, readable way.
Finally, the code uses the fetch() API to retrieve GitHub user data. The response is first converted to JSON using response.json(), then logged in the next .then(), with a .catch() to handle any network or fetch errors.
Overall, this code illustrates multiple ways to create, consume, and chain promises, handle errors, and combine them with modern async/await and fetch calls to work with asynchronous tasks and API responses in JavaScript.

The Fetch API is a modern, promise-based interface in JavaScript used to make HTTP requests to servers. When you call fetch(url, options), a Request object is created containing the URL, method, headers, and body (if any), and it is sent over the network asynchronously. The server processes the request and returns a Response object containing the status, headers, and body data. The fetch call immediately returns a Promise that resolves when the response is received. You can then process the response body using methods like json(), text(), or blob(), and handle network errors using .catch(). Unlike older approaches, fetch does not automatically reject on HTTP errors (like 404 or 500), so you must check response.ok or response.status. Overall, Fetch provides a cleaner, more modern way to work with asynchronous requests and responses in JavaScript.

3.const user={...} → Creates an object literal with properties (username, loginCount, sigin) and a method (getUserDetails).
✅ user.username → Accesses a specific property value from the object.
✅ user.getUserDetails() → Calls the function inside the object and prints details using this.
✅ this.username → Refers to the current object that owns the method.
✅ console.log(this) (outside function) → Logs an empty object {} in Node (global context).
✅ function User(...) { ... } → Defines a constructor function to create multiple user objects with common structure.
✅ this.username = username → Assigns values to object properties during object creation.
✅ this.greeting=function(){...} → Adds a method to each object created from the constructor.
✅ new User(...) → Creates a new instance of the User object with its own independent data.
✅ return this → Not needed in constructor functions — returned automatically when using new.

4.function multipleBy5(num){...} → Normal function that multiplies a number by 5.
✅ multipleBy5.power = 2 → Adds a custom property to the function — showing that functions are also objects.
✅ multipleBy5.prototype → Returns the function’s prototype object, used for inheritance in JavaScript.
✅ Concept: Functions in JavaScript are first-class objects — they can be called, assigned properties, and used as constructors.
✅ function createUser(username, score){...} → Constructor function (blueprint) for creating user objects.
✅ this.username = username / this.score = score → Assigns properties to each new object created with new.
✅ createUser.prototype.increment = function(){...} → Adds a shared method to all objects created from createUser.
✅ createUser.prototype.printMe = function(){...} → Another prototype method accessible by all user instances.
✅ const chai = new createUser("chai", 25) → Creates a new object using the constructor (links to prototype).
✅ const tea = createUser("tea", 250) → Calls function without new, so this refers to global scope — not recommended.
✅ chai.printMe() → Calls prototype method; logs score of the chai object.
Using new creates a new object, links it to the constructor’s prototype, binds this to it, and returns that object — forming the core of object-oriented JavaScript (prototypal inheritance).

6..call() is used to borrow another function’s code and run it in a specific context.
Without .call(this, username), setUsername would not affect the new object — username would never get set.
This technique helps reuse functions instead of writing the same code again.

7.In the first part, we use the class syntax (which is just a cleaner way to write prototype-based code). The User class has a constructor that initializes username, email, and password. It also has two methods:
encryptPassword() – adds "1501" to the user’s password.
changeUsername() – converts the username to uppercase.
When you create a new object using new User("adi", ...), it automatically sets up everything, and you can call these methods directly.
In the second part, the same logic is implemented using constructor functions and prototypes, which is how classes actually work under the hood.
The User function acts like a constructor.
User.prototype.encryptPassword and User.prototype.changeUsername attach methods to the prototype, making them accessible to all objects created from User.
So, the class syntax is just syntactic sugar over the prototype-based system.
Both versions behave the same — the class version is modern and cleaner, while the prototype version shows what happens internally.
8.In this code, a parent class User is defined with a constructor that initializes a username and a method logme() that prints the username. Then, a subclass Teacher is created using the extends keyword, which allows it to inherit all properties and methods of the User class. Inside the Teacher constructor, the super(username) call is used to invoke the parent class constructor, ensuring that the username property is correctly initialized from User before defining new properties like email and password. The Teacher class also includes its own method addCourse(), which adds specific functionality. When an object arhoi is created from the Teacher class, it can access both its own method addCourse() and the inherited method logme() from User, demonstrating inheritance and the use of super. The final statement arhoi instanceof User returns true, confirming that an instance of the Teacher subclass is also an instance of its parent User class, showing the hierarchical relationship between the two.
super is used to call the parent class's constructor or methods from a child (derived) class.
It allows the child class to access and reuse properties and methods defined in the parent class
extend keyword helps to take the parent clas refrence

9.In this code, a parent class User is defined with a constructor that initializes a username and a method logme() that prints the username. Then, a subclass Teacher is created using the extends keyword, which allows it to inherit all properties and methods of the User class. Inside the Teacher constructor, the super(username) call is used to invoke the parent class constructor, ensuring that the username property is correctly initialized from User before defining new properties like email and password. The Teacher class also includes its own method addCourse(), which adds specific functionality. When an object arhoi is created from the Teacher class, it can access both its own method addCourse() and the inherited method logme() from User, demonstrating inheritance and the use of super. The final statement arhoi instanceof User returns true, confirming that an instance of the Teacher subclass is also an instance of its parent User class, showing the hierarchical relationship between the two.

10.this in JavaScript:
Inside a class method, this refers to the class instance only when called correctly.
If you pass a method directly as a callback (like handleClick), this defaults to the element that triggered the event (the button).
.bind(this)
bind(this) locks the context of this to the current class instance.
Without bind, console.log(this.server) would not work because this would point to the button element.
Class-based approach
This simulates how React components work internally:
Properties are defined in the constructor.
Event handlers are bound to the instance.
Event Handling
Clicking the button triggers handleClick(), logging a message and the server URL.
.bind() is a JavaScript method used to fix the value of this in a function.
It creates a new function with this permanently set to the value you provide.

11.✅ Object.getOwnPropertyDescriptor(Math,"PI") → Shows hidden internal properties (like writable, enumerable, configurable) of built-in objects.
✅ Math.PI → Can’t be overwritten because its writable property is false.
✅ const tea={...} → Custom object with normal key-value pairs.
✅ Object.getOwnPropertyDescriptor(tea,"name") → Displays the descriptor (metadata) of the name property.
✅ Object.defineProperty(tea,"name",{writable:false,enumerable:false}) → Changes property behavior — makes it read-only and hidden from loops.
✅ Object.entries(tea) → Returns key-value pairs of the object for iteration using for...of.
✅ if (typeof value !== 'function') → Skips function properties during iteration.
✅ Concept Summary: Property descriptors control how object properties behave — whether they can be modified, listed, or redefined, giving deeper control over objects.

12.class User → Defines a blueprint for creating user objects with email and password.
✅ constructor(email, password) → Automatically runs when a new object is created; assigns values to properties.
✅ Getters (get) → Allow accessing values like properties while returning a modified version (e.g., email in uppercase with “@ybl”, password with “sqr”).
✅ Setters (set) → Allow custom logic when setting property values (used to assign to _email and _password to avoid recursive calls).
✅ _email and _password → Used as backing variables to prevent infinite loops between getter/setter and constructor.
✅ new User("aditya.123", "adi") → Creates a new object and triggers the constructor + setters.
✅ Concept Summary: Getters and setters provide controlled access to private data, letting you modify or protect values dynamically while maintaining encapsulation.