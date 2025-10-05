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
 