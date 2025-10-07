for(let i=0;i<=10;i++){
    const element=i;
    if(element==5){
        //console.log(" 5detected")//when 5 comes it prints message
    }
    //console.log(element)//it will print i till 10
}
// console.log(element);//this will trow error because it is out of block
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);//First this will run 10 times then the outer loop run one times then inner again runs 10 time this goes unti outer loop reaches 10
    //  console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];//takes  the element on the index
    // console.log(element);
    
}
for (let index = 1; index <= 20; index++){}
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// 