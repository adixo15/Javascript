const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"] //declaring array it can store anytype of data types together
const myArray2=new Array(1,2,3,4)//another way to declare an array
// console.log(myArr[4])//it tells us about what value is present on the index
// myArr.push(6)//it adds new values to the array
// console.log(myArr)
// myArr.pop()
// console.log(myArr) this removes the last value of the array
// myArr.unshift(9)
// console.log(myArr) //this adds one value at the front the shifts the index of the intial elemnts
// myArr.shift()
// console.log(myArr)//this removes the unshifted element
// console.log(myArr.includes(9)); gives output false
// console.log(myArr.indexOf(3)); gives output -1 (-1) here means doesn't exists
//  const newArr = myArr.join() this removes the third braces
//  console.log(newArr)
//  console.log(myArr)
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)//creates a shallow copy of part of the array without changing the original.
console.log(myn1)
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)//removes elements from the original array and modifies it directly.
//It also returns the removed elements.
console.log(myn2)

console.log("C ", myArr);
console.log(myn2);