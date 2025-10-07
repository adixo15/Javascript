const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num)//this loop is genrally used in arrays here const num is just let i in for loop normal it runs over array
}
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)//loop will itreate over whole sentence and then print each word and space
}
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map)//map is another typ of object it give with an arrow we can use foroff  loop in map also
for (const [key, value] of map) {
    // console.log(key, ':-', value);//To acess the key and value we must use sq brackets otherwise it will give the orginal map as earlier on using sq brackets it will destructure the map
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
// console.log(key, ':-', value);
}//it will throw error because we cant use foroff loop in case of objects