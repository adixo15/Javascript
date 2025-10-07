let myDate=new Date()
// console.log(myDate) gives complex typ of current date
// console.log(myDate.toDateString())//gives normal date with weekday 
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())//This gives normal date with time also
console.log(typeof(myDate))//The type of date is always object

// let myCreatedDate = new Date(2025, 10, 6)
// console.log(myCreatedDate)//creates new date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate) These are the types in which we can create the date
let myTimeStamp = Date.now()
// console.log(myTimeStamp)//This gives milisec timestamp
// console.log(myCreatedDate.getTime());//timestamp of the created date
// console.log(Math.floor(Date.now()/1000));//To convert timestamp into seconds

let newDate = new Date()
// console.log(newDate.getMonth() +1 ) this gives the current month we did +1 because in js months start with 0
newDate.toLocaleString('default', {
    weekday: "long",
    
})//This gives the full weekday