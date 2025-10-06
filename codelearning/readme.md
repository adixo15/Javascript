1.To print the output in console we use console.log and we have to download node js

2.We cannot change const it is fixed but we can change the variables let var .In production we only use let because let make your code more predictable, less error-prone, and align with modern JavaScript practices.We use console.table to print everything together in a table like format

3.JavaScript has two types of datatypes primitive and non primitive
Primitive: These are the basic building blocks already defined
They are- String, Number, Boolean, Undefined, Null, Symbol, BigInt
Non Primitive:These store references (addresses in memory), not actual values.
The are -Object (includes Arrays, Functions).
We use typeof to check the type of data.The type of null is object becuase it is a standalone with empty value wherease the typeof undefined is undefined because it is not defined

4.Type conversion means changing a value from one data type to another — like converting a string to a number, a number to a boolean, etc.
It can happen in two ways:
Implicit conversion (done automatically by JS)
Explicit conversion (done manually by you using built-in functions like Number(), String(), Boolean()).String to Number is invalid it gives NaN(not a number)

5.JavaScript supports different types of operations (called operators) used to perform actions on values and variables.Arithmetic: +, -, *, /, %, ++, --
prefernce matters if console has string first then it will be added as string if number first then additon as normal number then add the string
Increment operators are used to increase the value of a variable by 1.
There are two types:
a.Post-Increment (x++)
Increases the value after using the variable.
First it uses the value, then adds 1.
b. Pre-Increment (++x)
Increases the value before using the variable.
First it adds 1, then uses the new value.
same for decrement operators too

6.Normal Comparisons
JavaScript allows comparison between numbers and strings.
When comparing a string with a number, JavaScript automatically converts the string to a number before comparison.
✅ Example: "2" > 1 → 2 > 1 → true
⚠️ It is always recommended to compare values of the same data type to avoid confusion and unexpected results.
Comparison with null:
null represents an empty or non-existent value.
When using relational operators (<, >, <=, >=), JavaScript converts null to 0.
But in equality check (==), null is only equal to undefined, not 0.
Comparison with undefined:
undefined means a variable has been declared but not assigned any value.
When used in comparisons (>, <, ==), it is not converted to a number, resulting in false.So, all comparisons with undefined give false
Strict Equality (===):
The strict equality operator (===) checks both value and data type.
Example:
"2" === 2 → false
because one is a string, the other is a number.

7.🧠 Memory Allocation in JavaScript
In JavaScript, memory is mainly divided into two types:
 a.Stack Memory
 b.Heap Memory
Stack Memory (Call by Value):
 Used to store primitive data types, such as:
 Number, String, Boolean, Null, Undefined, Symbol, BigInt.
 In this type of memory, a copy of the actual value is stored.
 When a variable is assigned to another variable, only the value is copied, not the original memory reference.
 Therefore, changing one variable does not affect the other.
 This is also called Call by Value.
Heap Memory (Call by Reference):
 Used to store non-primitive data types, such as:
 Object, Array, Function.
 In this case, the reference (or address) of the value is stored in memory.
 When a variable is assigned to another, both refer to the same memory location.
 So, if one is modified, the original data also changes.
 This is called Call by Reference.

 8.🧠 String Handling in JavaScript
 A string in JavaScript is a sequence of characters enclosed in single quotes (''), double quotes (""), or backticks ( ).
 Strings are immutable, meaning once created, their values cannot be changed — only new strings can be formed.
Declaring Strings
 Strings can be declared in two ways:
 Primitive method: let name = "Aditya";
 Object method: let name = new String("Aditya");
 In this form, the string is treated as an object, giving access to various prototype methods.
String Prototypes:
 Every string in JavaScript has an internal prototype that contains built-in methods like toUpperCase(), toLowerCase(), trim(), split(), etc.
 When we use these methods, JavaScript temporarily wraps the primitive string in a String object, uses the method, and then discards the object.
Methods:
 substring() and slice() both extract parts of a string, but only slice() supports negative indices.
split() converts a string into an array.
.replace() and .includes() are useful for searching and modifying strings.

9.🧮 Number Handling in JavaScript
In JavaScript, all numeric values are represented by the Number data type.
JavaScript automatically detects numbers, but we can also explicitly define them using the Number object.
In JavaScript, all numeric values are represented by the Number data type.
JavaScript automatically detects numbers, but we can also explicitly define them using the Number object.

10.🔢 Math Object in JavaScript
The Math object in JavaScript is a built-in object that provides various mathematical properties and methods.
It allows performing mathematical operations such as rounding, finding maximum/minimum values, generating random numbers, etc.
⚡ The Math object is not a constructor, so we don’t use new Math().
All its methods are static, meaning we use them directly as Math.method().
 Math.random(): 
generates a random decimal number between 0 (inclusive) and 1 (exclusive).
It is commonly used for random number generation in programs
To generate random numbers within a specific range:
Formula:
Math.floor(Math.random() * (max - min + 1)) + min

11.The Date object in JavaScript is used to work with dates and times.
It allows creating, formatting, and manipulating date-time values easily.
⚡ The type of a Date is always an object in JavaScript.Dates can be created using the Date() constructor in several ways:Date.now() → Returns the current timestamp in milliseconds since January 1, 1970 (Unix Epoch).
myDate.getTime() → Returns the timestamp of a specific date.
To convert milliseconds to seconds, divide by 1000 and optionally use Math.floor() to remove decimals.You can extract specific parts of a date using getter methods

12.JavaScript Arrays
Arrays store multiple values in a single variable — they can hold mixed data types.
Declaration: let arr = [1,2,3] or let arr = new Array(1,2,3)
Access Element: arr[index] → returns value at given index.
push() → adds element at the end of the array.
pop() → removes the last element of the array.
unshift() → adds element at the beginning and shifts others.
shift() → removes the first element of the array.
includes() → checks if a value exists → returns true/false.
indexOf() → returns the index of a value (returns -1 if not found).
join() → converts array to string by removing brackets.
slice(start, end) → returns part of array (shallow copy) without changing original.
splice(start, count) → removes elements from original array and returns them.
Difference:
slice() → does not modify the original array.
splice() → modifies the original array.

13.JavaScript Array Combination & Utility Methods:
push(array) → Adds another array as a single element, creating a nested array.
concat() → Joins two or more arrays into a new array (doesn’t modify original).
spread operator (...) → Another way to merge arrays quickly (acts like unpacking).
flat(Infinity) → Flattens nested arrays into a single-level array.
Array.isArray(value) → Checks whether the given value is an array → returns true/false.
Array.from(value) → Converts iterable objects (like strings) into arrays.
Array.from(object) → Returns empty array if the input is a non-iterable object.
Array.of(a, b, c, …) → Creates a new array from the given set of values.
 
14.JavaScript Objects:(LITREALS)
Object → Used to store data in key–value pairs.
Declaration: const obj = { key: value } or using new Object().
Symbols (Symbol()) → Used to create unique keys for objects.
Accessing values:
obj.key → using dot notation
obj["key"] → using square brackets (for keys with spaces or quotes)
For symbol keys: must use square brackets → obj[mySym].
Modify values: assign new value → obj.key = newValue.
Object.freeze(obj) → makes the object immutable (can’t change values).
Adding functions: functions can be defined as methods inside objects.
this keyword: used inside methods to refer to current object’s properties.
Example: this.name → accesses the name key of the same object

15.const tinderUser = {} → Creates a non-singleton object.
tinderUser.id = "123abc" → Adds key-value pairs dynamically.
const regularUser = { fullname: { userfullname: { firstname: "hitesh" }}} → Shows nested objects.
regularUser.fullname.userfullname.firstname → Accesses nested object values.
Object.assign({}, obj1, obj2) → Merges multiple objects into one (older method).
{...obj1, ...obj2, ...obj3} → Spread operator for merging objects (modern & preferred).
users = [{}, {}, {}] → Example of an array of objects.
users[1].email → Accesses the email of the second object in the array.
Object.keys(tinderUser) → Returns all keys of the object as an array.
Object.values(tinderUser) → Returns all values of the object as an array.
Object.entries(tinderUser) → Returns key-value pairs as nested arrays.
tinderUser.hasOwnProperty('isLoggedIn') → Checks if a key exists in the object.
const {courseInstructor: instructor} = course → Object destructuring, renaming key to variable.
JSON → JavaScript Object Notation, used for data exchange (looks like object syntax).

16.Functions in Js
function saymyname() → Defines a basic function that prints "Aditya" to console.
📝 Used to group reusable code blocks.
add(num1, num2) → Adds two numbers and returns the sum.
📝 Returns value using return, doesn’t auto print.
console.log("Result", add(2,3)) → Prints the returned value from function.
loggedIn(username) → Checks if username is provided; otherwise asks for it.
📝 Uses if(!username) to validate input and return to exit early.
calculateCartPrice(val1) → Returns only one argument, ignoring others.
📝 Shows how extra arguments are ignored if not handled.
price(num1, ...val1) → Uses rest operator (...) to collect multiple arguments as an array.
📝 Allows handling of variable-length inputs.
handleObject(anyobject) → Takes an object and logs its username and price.
📝 Demonstrates passing and accessing object properties in functions.
returnSecondValue(getArray) → Returns the second element of any passed array.
📝 Illustrates function working with arrays and indexing.
Concept:
...val1 → Rest parameter, groups extra arguments into an array.
return → Sends a value back to the caller.
!username → Checks for missing/falsey input.
function → Keyword to declare reusable blocks of code.

17.Scopes in js
let and const → Block-scoped, can only be accessed inside {} where declared.
var → Function-scoped, can escape block {} → ❌ avoid using it.
Lexical Scope (Nested Functions):
Inner functions can access parent variables, but parents can’t access child variables.
📝 This is called Lexical (Static) Scope — variables are resolved based on where functions are defined, not where they’re called.

18.this inside object methods refers to the object itself.
this in the global scope refers to the global object (window in browser).
this inside a normal function is undefined in strict mode.
this inside an arrow function doesn’t have its own context (lexical this).
user.welcome() accesses object keys using this.
console.log(this) globally shows an empty object in Node and window in browser.
console.log(this.username) gives undefined because this isn’t bound to local variables.
Arrow functions don’t bind this, they use parent scope’s this.
Arrow function with {} needs return keyword.
Arrow function without {} automatically returns the expression.
For returning objects in arrow functions, wrap them in parentheses ({}).
const info = () => ({name:"Aditya"}) returns an object properly.

19.IIFE → A function that is declared and executed immediately.
Normal function cannot be invoked immediately without wrapping in parentheses.
Syntax: (function(){ /* code */ })(); → wrap function in () and add () to execute.
Arrow functions can also be IIFE: ((name) => { /* code */ })(argument).
IIFE is commonly used to create a private scope and avoid polluting global namespace.

20.if checks a condition and runs code only if it's true.
Comparison operators: <, >, <=, >=, ==, !=, ===, !== compare values.
== compares value only; === compares value + type.
Multiple if...else if...else handle different conditions sequentially.
&& (AND) runs if all conditions are true.
|| (OR) runs if any one condition is true.
Variables declared inside if with let/const are block-scoped (not accessible outside).
You can write single-line if statements without {} for short code.

21.switch is used to check one value against multiple possible cases.
Each case represents a possible match for the value.
break stops further case checking once a match is found.
If no case matches, the default block executes.
Useful alternative to multiple if...else if statements.

22.if checks truthy or falsy values before running code.
Falsy values: false, 0, -0, 0n, "", null, undefined, NaN.
Truthy values: non-empty strings, arrays [], objects {}, and functions.
Object.keys(obj).length === 0 checks if an object is empty.
Nullish Coalescing (??) returns the first non-null/undefined value.
Ternary operator (? :) is a shorthand for if...else in one line.

23.for loop runs code repeatedly until a condition becomes false.
Variables declared with let inside the loop are block-scoped.
Nested loops mean one loop runs inside another (inner runs completely for each outer iteration).
.length gives the total number of elements in an array.
break stops the loop immediately when the condition is met.
continue skips the current iteration and moves to the next one.

24.while loop runs as long as the condition is true.
Used when the number of iterations isn’t fixed.
Increment inside the loop is necessary to avoid infinite loops.
do...while runs the code at least once before checking the condition.
Commonly used to execute code once and then repeat based on a condition.

25.for...of loop iterates directly over values of arrays, strings, or iterables.
In arrays, it gives each element one by one.
In strings, it gives each character (including spaces).
Map stores key-value pairs and maintains insertion order.
Using [key, value] in for...of destructures each map entry.
for...of cannot be used with plain objects (not iterable).

26.for...in loop iterates over keys (properties) of an object.
Use square brackets object[key] to access values.
It can also be used on arrays, giving indexes instead of values.
for...in does not work with Map because Map is not a plain object.
Best suited for objects, not for arrays or maps.

27.forEach() is used to iterate over arrays and execute a function for each element.
It takes a callback function (can be normal or arrow).
You can access the item, index, and entire array inside it.
It doesn’t return a new array — it’s used mainly for performing actions (like printing, updating, or accessing data).
Works well for looping through arrays of objects to access specific properties easily.

28.forEach() executes a function for each array item but does not return anything.
filter() creates a new array with elements that satisfy a given condition.
It’s mainly used to extract specific data from an array based on logic.
Inside filter(), the callback must return true for items to be included.
Example: filtering books by genre or publish year gives a customized subset of data.

29..map() is used to create a new array by transforming each element of an existing array.
It always returns a new array of the same length as the original.
The callback function inside .map() runs for every element and returns the modified value.
Commonly used for data transformation — e.g., changing formats, applying calculations, or extracting specific properties.
It does not modify the original array (it’s non-destructive).

30..reduce() is used to reduce an array to a single value by applying a function on each element.
The callback function takes two main arguments:
Accumulator – keeps the running result.
Current value – the current element being processed.
It can also take an initial value for the accumulator.
Commonly used for sum, product, maximum/minimum, or merging data.
It does not change the original array.