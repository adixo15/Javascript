// console.log(2 > 1); output:true
// console.log(2 >= 1); output:true
// console.log(2 < 1); output:false
// console.log(2 == 1); output:false
// console.log(2 != 1);output:true
//Normal comparisons
// console.log("2" > 1);
// console.log("02" > 1);//this 2 still gives output true but we should do comparisons always with same datetypes
console.log(null > 0);//output false
console.log(null == 0);//output false
console.log(null >= 0);//output true
//Here assume zero to be greter as null is empty value
console.log(undefined == 0);//
console.log(undefined > 0);
console.log(undefined < 0);
//Here all threegives output false since there is no value assigned in undefined
console.log("2" === 2);//this will give output false this is strict checking it will compare the value as well as the datatype