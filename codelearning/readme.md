1.To print the output we use console.log and we have to download node js

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