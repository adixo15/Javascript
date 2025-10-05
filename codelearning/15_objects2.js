// const tinderUser=new Object() singleton object
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser) we can make an object like this also 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"//This is nesting of objects
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// console.log(obj1,obj2)//this creates 2 seprate objects
// console.log(Object.assign({},obj1,obj2))//This will join the 2 objects in one single obj
const obj4 = {...obj1, ...obj2,...obj3}//most preffered one to concaticate objects
// console.log(obj4)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email)//it returns index 1 object's email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));//returns the key of object
// console.log(Object.values(tinderUser));//returns the value of object
// console.log(Object.entries(tinderUser));//returns the total keys and values of the object
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//checks and returns true or false based on key is present or not
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} = course//destructering
console.log(instructor)
[
    {},
    {},
    {}
]//this is array of objects
{
    //this is json(Java Script Object notation for entries and destructing)
} 