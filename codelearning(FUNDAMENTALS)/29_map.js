const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNums = myNumers.map( (num) => { return num + 10})
 console.log(newNums)//create a new array by transforming each element of an existing array.
// It always returns a new array of the same length as the original.
// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);