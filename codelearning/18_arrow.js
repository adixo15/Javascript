const user={
    name:"Aditya",
    ph:7044225747,
    welcome:function(){
        // console.log(`Hello ${this.name} your phone number is ${this.ph}`)//in global object cases we need to use this inside function to use the object keys
        console.log(this)//this prints  the whole object keys with values
    }
}
user.welcome()
console.log(this)//this will return an object but in the dom we will get serval functions like windows nd all
 
function code(){
    let username="Aditya"
    console.log(this.username)//this will give undefined as  we can use this inside function only when object is there otherwise it will not run
}
code()
const coding=()=>{// This is arrow function calling
    let name="Aditya"
    console.log(this.name)//The same logic is here we cannot use this here too
}
coding()
const add=(num1,num2)=>{
    return num1+num2//we can use parenthisis to define arrow function but we have to use return always
}
 console.log(add(2,3))
 const addTwo = (num1, num2) =>  num1 + num2//another way pf writing here no need to write return as it will automatically assume 
  const addT = (num1, num2) => ( num1 + num2 )//in this way we can also write  using brackets this is useful while object
  const info=()=>({name:"Aditya"})//While object creation inside arrow function always use brac
  console.log(info())