function setUsername(username){
    this.username=username
    console.log("called")
}
// function createUsername(username,email,password){
//      this.email = email
//     this.password = password

// }
//here what happens is that username is not printed because it is not called form external function so for this we have to call it
function createUsername(username,email,password){
    setUsername.call(this,username)
     this.email = email
    this.password = password

}

const tea=new createUsername("shukla","aditya123@gmail.com","aditya1501")
console.log(tea)