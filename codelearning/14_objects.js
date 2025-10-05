// "LITREALS"
const mySym=Symbol("key1")//creating symbol
const user={
    name:"Aditya",
    fullName:"Aditya Shukla",
    "full name":"shukla Aditya",
    [mySym]:"mykey1",
    age:18,
    email:"aditya@gmail.com",
    isLoggedIn:false,
    lastLogin:["Monday","Friday"]
}//declaration of an object
console.log(user)
console.log(user.email)//we can acess email using dot
console.log(user["email"])//we can acess email using sq brac but key should be in quotes
console.log(user["full name"])//if key is in quotation then we have to use sq brac only
console.log(user.fullName)
 console.log(user[mySym])//for symbol sq brac
//  user.email = "hitesh@chatgpt.com"
//   Object.freeze(user)//we cannot modify this after using freeze it makes it immutable
//   console.log(user)
user.greeting = function(){
    console.log("Hello JS user");//we can create function in objects too
}
console.log(user.greeting())
user.greeting2=function(){
   console.log(`Hello ${this.name}`)//to use a specific key in function calling we use this. then the key
}
console.log(user.greeting2())