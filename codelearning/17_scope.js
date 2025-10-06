if(true){
    let a=200
    const b=400
    var c=350
}
// console.log(a)//this is will throw error
// console.log(b)//this will also throw error
// console.log(c)//this will come out of the block of if else which shouldnt happen thats why we dont use var
function one(){
    const username="Aditya"
    function two(){
        const surname="Shukla"
        console.log(username)//username is not defined inside two().So how we cannot access it
 //Because of Lexical Scope.
    }
    // console.log(surname)//we cannot use inner function variable in outer 
    two()
}
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);//this will be executed because its an inner function can acess its parent varaibles
    }
    console.log(website);//this will throw error because website is defined in inner function
}

console.log(username);//this will throw error because username is inside if block 