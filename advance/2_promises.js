const promiseOne=new Promise(function(resolve,reject){//creation of new promise with 2 parameter resolve and reject
    setTimeout(function() {//this sets an interval after which the promise runs
        console.log("Async task completed")
        resolve()//without this promise consumption will not occur
    },1000)
})
promiseOne.then(function(){//.then act as an attachment with the setInterval function it shows what to do after promise is fully fullfiled
    console.log("Promise consumed")
})

// new Promise(function(resolve,reject){
//     setInterval(function(){
//         console.log("Task2 Completed")
//         resolve()
//     },1000)   //ant
// }).then(function(){
//     console.log("Task2 conssumed")   another of handling promise without storing in variables
// })
 const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    //   console.log("Task 3 compling...")
      resolve({username:"Aditya",email:"shukla@example.com"})//this is the way of adding values in the promise in form of objects
    //   console.log("Completed Task 3")
    },1000)
})
promiseThree.then(function(user){//to acess values we have give a paramter to function here
    // console.log('Third task consumed')
    console.log(user);
    // console.log(user.username)//this prints only username
 })
 const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"aditya123",password:"aditya1501"})
        }
        else{
            reject(`Error:Something went wrong`)
        }
    },1000)
})
promiseFour.
then((user)=>{
 console.log(user)
 return user.username
}).then((username)=>{
 console.log(username);
}).catch(function(error){
 console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive=new Promise(function(resolve,reject){//// Create a new Promise that resolves or rejects after 1 second
    setTimeout(function(){
        let error = true
        if (!error) {//// Simulate an error
            resolve({username: "javascript", password: "123"}) // Resolve with user data if no error
        } else {
            reject('ERROR: JS went wrong')// Reject with error message if there is an error
        }
    },1000)
})
async function consumePromiseFive(){// Async function to consume promiseFive using async/await
    try{
        const response=await promiseFive// Wait for promise to resolve
        console.log(response)// Log the resolved data
    }catch(error){
        console.log(error)// Log the error if promise rejects
    }
}
consumePromiseFive()// Call the async function
fetch('https://api.github.com/users/hiteshchoudhary')// Fetch data from GitHub API using fetch()
.then((response) => {
    return response.json()// Convert raw response to JSON
})
.then((data) => {
    console.log(data);// Log the JSON data
})
.catch((error) => console.log(error))// Log any network or fetch errors