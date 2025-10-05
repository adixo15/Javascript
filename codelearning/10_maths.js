// console.log(Math)//in the console we get empty object but in the domwe will get all the methods of math
// console.log(Math.abs(-4))//It is the mod of maths changes the sign of only negative values
// console.log(Math.round(4.6))//Normal rounding off above .5 changes to next number
// console.log(Math.ceil(4.2))//it changes to next bigger digit even there is a point change
// console.log(Math.floor(4.6))//it changes to the  smaller original value
// console.log(Math.min(2,3,5,6))//it gives minimum value
// console.log(Math.max(5,3,2,9))//it gives the maximum value

console.log(Math.random())//it gives an possible value between 0 and 1
console.log((Math.random()*10)+1)//it gives value between 1 to 9 including the decimAL +1  is there to ensure 0 doesnt comes
console.log((Math.floor(Math.random()*10))+1)//it removes the decimal values nd rest same as  upper
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//formulae to find values between 2 specific numbers +min is there to ensure intial value doesnt start below the minmum value