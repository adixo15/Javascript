function saymyname(){
    console.log("Aditya")//function defining
}
// saymyname()//function call call by ref
function add(num1,num2){
    let result=num1+num2
    return result//it doesnt print in console
}
add(2,3)//function is called but  result is not printed in console
console.log("Result",add(2,3))//this will print the result

function loggedIn(username){
    if(!username){// !means the that there is no username
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loggedIn("Aditya"))
function calculateCartPrice(val1){
    return val1//for this function only one value will be added
}
//  console.log(calculateCartPrice(200, 400, 500, 2000))
function price(num1,...val1){
    return val1
}
// console.log(price(200, 400, 500, 2000))//...val1 is resting function it will add on values
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){//this will handle anyobject just we have to give object name during calling
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){//This will handle any array as above fucntion
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 500, 1000]));