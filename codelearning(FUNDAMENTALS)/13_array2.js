const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)//it creates array inside another array making it as single element of array
// console.log(marvel_heros)//
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)//it adds 2 arrays together without doing array inside another array
// const allHeros=[...marvel_heros,...dc_heros]
// console.log(allHeros) another method to join two array together it act as a spreader
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array=another_array.flat(Infinity)
// console.log(real_array) //this makes the array as a single array
console.log(Array.isArray("hitesh"))//returns false
console.log(Array.from("Aditya"))//it creates array of all words make them single identity
console.log(Array.from({name: "hitesh"})) //it returns an empty array since it is an object formation
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))//creates an array of all the score together