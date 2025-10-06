//Immediately Invoked Function Expressions (IIFE)
// function code(){
//     console.log("hello")
// }() we cannot do this we have to use braces

(function code(){
    console.log("hello")
})();//we have to decalre like this nd use a semicolon to end the execution
((name)=>{
     console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')//declaring an arrow function like this