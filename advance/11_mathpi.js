const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")//this shows hidden property of objects thatare hardcoded
console.log(descriptor)//this will show math pi internal object and its hardcorded values
// Math.PI=5
// console.log(Math.PI) this value cannot be overwritten because its writable value is false
const tea={
    name:"Aditya",
    price:"20",
    isAvailable:true
    
   
}
console.log(Object.getOwnPropertyDescriptor(tea,"name"))//this is how we can acess our own built object descriptor
Object.defineProperty(tea,"name",{
    writable:false,//This is how we can change our object descriptor properties
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(tea,"name"))
for (let [key, value] of Object.entries(tea)) { //to itreate object we use object.entries
    if (typeof value !== 'function') {
        //here loop will not run and the output will be only price and isavailable because enumerable is false
        console.log(`${key} : ${value}`);
    }
}