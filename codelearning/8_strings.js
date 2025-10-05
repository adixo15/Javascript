const name="Aditya"
const repcount=12
// console.log(name+repcount,value=60) this is old approach to concatinate string
// console.log(`Name is ${name} his repcount is ${repcount}`) this is new way to conactinate using backticks it creates placeholder for each variable

// const gameName = new String('hitesh-hc-com')another way of declaring string in dom we get it as object nd a prototype that contains various methods of string

console.log(name.length)//returns the length of the string
console.log(name.__proto__)//returns empty object but in the dom we can see evry method
console.log(name.charAt(2))//returns the character on the asked index
console.log(name.indexOf("t"))//returns the index of the charcter

const newString=name.substring(0,3)//returns the character given in the limit of index we cannot give negative values here
console.log(newString)
const anotherString=name.slice(0,4)
console.log(anotherString)//Does the same thing as susbrting just we can give negative indexes here
const newStringOne = "   hitesh    "
console.log(newStringOne.trim())//removes spaces
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","-"))//replaces the character with another character
console.log(url.includes('sundar'))//checks whether the word or charcter is present in the string or not
const gameName="hitesh-hc-com"
console.log(gameName.split('-'));//removes the word and splits the sentences into different values in an array
