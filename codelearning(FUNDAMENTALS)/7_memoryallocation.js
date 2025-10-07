//In JavaScript memory is allocated mainly in two typ
//Stack(For primitive),Heap(Non Primitive)
let myname="Aditya"
let anothername=myname//copy of the value is given not the main value
anothername="Hitesh"//change is made in the copy
// console.log(myname)//outputs the intial name 
// console.log(anothername)//outputs the change in copy
//So this is stack memory allocation call by value 
let info={//creating an object
    name:"Aditya",
    email:"aditya@gmail.com",
    ph:7044225747
}
info.email="shukla@gmail.com"//change in the main value
console.log(info)//changes the original info content
//This is heap memory allocation call by refrence
